// Генератор статичных SEO-версий страниц (public/.../index.html).
//
// Зачем: поисковые роботы (Яндекс, Google) не всегда выполняют JS, поэтому для
// карточек товаров, информационных страниц и статей блога лежат заранее
// собранные HTML-файлы с уникальными title/description/canonical/JSON-LD.
// Раньше эти файлы редактировались вручную и рассинхронизировались с
// реальными данными на странице (ценой, описанием, текстом статьи).
//
// Что делает скрипт (3 источника данных, 3 генератора):
//  1. Товарные карточки — читает src/pages/*.tsx (там хранится единственный
//     источник правды — цена, название, описание, JSON-LD) и вычисляет
//     реальные значения констант через esbuild + vm.
//  2. Простые информационные страницы (About/Reviews/Delivery/FAQ) — то же
//     самое, но без Product Schema.
//  3. Статьи блога — данные хранятся в БД, а не в исходниках, поэтому список
//     статей запрашивается у backend (blog-generate) по HTTP, и для каждой
//     статьи генерируется свой public/blog/<slug>/index.html.
//
// Общий HTML-шаблон и общие блоки JSON-LD (Organization/LocalBusiness/WebSite)
// берутся из уже существующего эталонного файла public/speed-valve/tpa11-050/index.html.
//
// Запускается автоматически перед каждой сборкой — см. postcss.config.cjs
// (package.json и vite.config.ts на этой платформе доступны только для чтения,
// поэтому стандартный npm-хук "prebuild" использовать нельзя).

import esbuild from 'esbuild';
import vm from 'node:vm';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Карточки товаров: исходник страницы -> путь до статичного HTML в public/
const PRODUCT_PAGES = [
  { src: 'src/pages/SpeedValveDU25.tsx', out: 'public/speed-valve/tpa11-025/index.html' },
  { src: 'src/pages/SpeedValveDU32.tsx', out: 'public/speed-valve/tpa11-032/index.html' },
  { src: 'src/pages/SpeedValveDU40.tsx', out: 'public/speed-valve/tpa11-040/index.html' },
  { src: 'src/pages/SpeedValveDU50.tsx', out: 'public/speed-valve/tpa11-050/index.html' },
  { src: 'src/pages/SafetyValvePPCZ12.tsx', out: 'public/safety-valve/ppcz-12/index.html' },
  { src: 'src/pages/SafetyValvePK32L.tsx', out: 'public/safety-valve/pk-32-l/index.html' },
  { src: 'src/pages/ComponentSpringPPCZ12.tsx', out: 'public/components/spring-ppcz12/index.html' },
  { src: 'src/pages/ComponentValvePPCZ12.tsx', out: 'public/components/valve-ppcz12/index.html' },
  { src: 'src/pages/ComponentFlange4PPCZ12.tsx', out: 'public/components/flange4-ppcz12/index.html' },
  { src: 'src/pages/ComponentFlange8PPCZ12.tsx', out: 'public/components/flange8-ppcz12/index.html' },
  { src: 'src/pages/FlangesType01B.tsx', out: 'public/flanges/tip-01-ispolnenie-b/index.html' },
  { src: 'src/pages/FlangesType01BDv116.tsx', out: 'public/flanges/tip-01-ispolnenie-b-dv116/index.html' },
  { src: 'src/pages/PumpFrameCorkenFD150.tsx', out: 'public/pump-equipment/corken-fd150-frame/index.html' },
];

// Простые информационные страницы: те же SEO-теги, но без Product Schema.
const INFO_PAGES = [
  { src: 'src/pages/About.tsx', out: 'public/about/index.html' },
  { src: 'src/pages/Reviews.tsx', out: 'public/reviews/index.html' },
  { src: 'src/pages/Delivery.tsx', out: 'public/delivery/index.html' },
  { src: 'src/pages/FAQ.tsx', out: 'public/faq/index.html' },
  { src: 'src/pages/Blog.tsx', out: 'public/blog/index.html' },
];

// Файл-эталон: из него берём общую разметку (head-обвязку, скрипт подгрузки
// бандла, Метрику) и общие JSON-LD блоки (Organization/LocalBusiness/WebSite).
const TEMPLATE_FILE = 'public/speed-valve/tpa11-050/index.html';

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

function writeFile(relPath, content) {
  const absPath = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

// Выполняет исходник страницы (JSX/TSX) в песочнице и возвращает значения
// нужных module-level констант — включая уже вычисленные JSON.stringify(...)
// строки (productLd, breadcrumbLd), а не сырые объекты.
function extractPageData(relSrcPath, names) {
  const absPath = path.join(ROOT, relSrcPath);
  const source = fs.readFileSync(absPath, 'utf8');
  const { code } = esbuild.transformSync(source, {
    loader: 'tsx',
    format: 'cjs',
    target: 'es2020',
  });

  const epilogue = `\ntry {\n  module.exports.__data = { ${names
    .map((n) => `${n}: typeof ${n} !== 'undefined' ? ${n} : undefined`)
    .join(', ')} };\n} catch (e) {\n  module.exports.__error = String((e && e.stack) || e);\n}`;

  const fullCode = code + epilogue;

  // JSX-файл может импортировать React-компоненты, хуки, контексты — для
  // вычисления SEO-констант всё это не нужно, поэтому require() заменяем
  // безопасной заглушкой-прокси, которая ничего не делает и не падает.
  function stubRequire() {
    const handler = {
      get: () => new Proxy(function stub() {}, handler),
      apply: () => undefined,
      construct: () => ({}),
    };
    return new Proxy(function stub() {}, handler);
  }

  const sandbox = {
    module: { exports: {} },
    require: stubRequire,
    console,
    process,
    __dirname: path.dirname(absPath),
    __filename: absPath,
  };
  sandbox.exports = sandbox.module.exports;
  sandbox.global = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fullCode, sandbox, { filename: absPath, timeout: 5000 });

  if (sandbox.module.exports.__error) {
    throw new Error(`Не удалось вычислить данные из ${relSrcPath}: ${sandbox.module.exports.__error}`);
  }
  return sandbox.module.exports.__data;
}

// Достаёт из JSX-разметки страницы содержимое одного <meta>/<title> тега по
// его имени/значению атрибута. Теги на этих страницах гарантированно
// встречаются один раз, поэтому простой regex безопасен и не требует
// полноценного JSX-парсера.
function extractTag(source, regex, label, relSrcPath) {
  const match = source.match(regex);
  if (!match) {
    throw new Error(`Не найден тег "${label}" в ${relSrcPath}`);
  }
  return match[1];
}

function extractHelmetTags(relSrcPath) {
  const source = fs.readFileSync(path.join(ROOT, relSrcPath), 'utf8');
  const title = extractTag(source, /<title>([\s\S]*?)<\/title>/, 'title', relSrcPath);
  const description = extractTag(
    source,
    /name="description"\s*\n?\s*content="([^"]*)"/,
    'meta description',
    relSrcPath,
  );
  const ogTitle = extractTag(
    source,
    /property="og:title"\s*content="([^"]*)"/,
    'og:title',
    relSrcPath,
  );
  const ogDescription = extractTag(
    source,
    /property="og:description"\s*\n?\s*content="([^"]*)"/,
    'og:description',
    relSrcPath,
  );
  // canonical/og:image у товарных страниц заданы через JSX-выражения
  // (href={CANONICAL}, content={PRODUCT_IMAGE}) — их значения приходят из
  // extractPageData, а не отсюда, поэтому здесь они необязательны.
  const canonicalMatch = source.match(/rel="canonical"\s*href="([^"]*)"/);
  const ogImageMatch = source.match(/property="og:image"\s*content="([^"]*)"/);
  return {
    title,
    description,
    ogTitle,
    ogDescription,
    canonical: canonicalMatch ? canonicalMatch[1] : undefined,
    image: ogImageMatch ? ogImageMatch[1] : undefined,
  };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// Подставляет общие (не зависящие от типа страницы) SEO-теги в HTML-шаблон:
// title, description, canonical, og:title/description/url/image, twitter:image.
function applyCommonTags(html, data) {
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(data.title)}</title>`);

  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeAttr(data.description)}" />`,
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${escapeAttr(data.canonical)}" />`,
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeAttr(data.ogTitle)}" />`,
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeAttr(data.ogDescription)}" />`,
  );

  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${escapeAttr(data.canonical)}" />`,
  );

  if (data.image) {
    html = html.replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${escapeAttr(data.image)}" />`,
    );
    html = html.replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${escapeAttr(data.image)}" />`,
    );
  }

  return html;
}

// Заменяет блок "<!-- Product Schema --> <script ...>{...}</script>" целиком.
// Используется и для Product Schema (товары), и для Article Schema (статьи
// блога) — маркер-комментарий передаётся параметром.
function replaceSchemaBlock(html, marker, jsonLdString) {
  const pretty = JSON.stringify(JSON.parse(jsonLdString), null, 6);
  const re = new RegExp(`(<!-- ${marker} -->\\s*<script type="application/ld\\+json">\\n)[\\s\\S]*?(\\n\\s*<\\/script>)`);
  if (!re.test(html)) {
    throw new Error(`В шаблоне не найден блок "<!-- ${marker} -->"`);
  }
  return html.replace(re, `$1${pretty}$2`);
}

// Убирает "<!-- Product Schema --> <script ...>...</script>" из шаблона —
// используется для страниц, где товарной JSON-LD-разметки быть не должно
// (информационные страницы, статьи блога).
function removeSchemaBlock(html, marker) {
  const re = new RegExp(`\\s*<!-- ${marker} -->\\s*<script type="application/ld\\+json">\\n[\\s\\S]*?\\n\\s*<\\/script>`);
  return html.replace(re, '');
}

function buildProductHtml(template, data) {
  let html = applyCommonTags(template, data);
  html = replaceSchemaBlock(html, 'Product Schema', data.productLd);
  return html;
}

function buildInfoHtml(template, data) {
  let html = applyCommonTags(template, data);
  html = removeSchemaBlock(html, 'Product Schema');
  return html;
}

function buildArticleHtml(template, data) {
  let html = applyCommonTags(template, data);
  html = replaceSchemaBlock(html, 'Product Schema', data.articleLd);
  return html;
}

function generateProductPages(template) {
  const errors = [];
  for (const page of PRODUCT_PAGES) {
    try {
      const helmetTags = extractHelmetTags(page.src);
      const pageData = extractPageData(page.src, ['CANONICAL', 'PRODUCT_IMAGE', 'productLd']);

      if (!pageData || !pageData.CANONICAL || !pageData.PRODUCT_IMAGE || !pageData.productLd) {
        throw new Error(
          `В ${page.src} не найдены ожидаемые константы CANONICAL / PRODUCT_IMAGE / productLd`,
        );
      }

      const html = buildProductHtml(template, {
        title: helmetTags.title,
        description: helmetTags.description,
        ogTitle: helmetTags.ogTitle,
        ogDescription: helmetTags.ogDescription,
        canonical: pageData.CANONICAL,
        image: pageData.PRODUCT_IMAGE,
        productLd: pageData.productLd,
      });

      writeFile(page.out, html);
      console.log(`OK  ${page.out}`);
    } catch (err) {
      errors.push(`${page.src}: ${err.message}`);
      console.error(`FAIL ${page.src}: ${err.message}`);
    }
  }
  return errors;
}

function generateInfoPages(template) {
  const errors = [];
  for (const page of INFO_PAGES) {
    try {
      const helmetTags = extractHelmetTags(page.src);

      const html = buildInfoHtml(template, {
        title: helmetTags.title,
        description: helmetTags.description,
        ogTitle: helmetTags.ogTitle,
        ogDescription: helmetTags.ogDescription,
        canonical: helmetTags.canonical,
        image: helmetTags.image,
      });

      writeFile(page.out, html);
      console.log(`OK  ${page.out}`);
    } catch (err) {
      errors.push(`${page.src}: ${err.message}`);
      console.error(`FAIL ${page.src}: ${err.message}`);
    }
  }
  return errors;
}

// Статьи блога хранятся в БД, а не в исходниках, поэтому список статей
// запрашивается у backend (blog-generate) по HTTP. Если backend недоступен
// (нет сети в момент сборки, временная ошибка) — не роняем всю сборку,
// просто пропускаем обновление блога и оставляем на диске то, что уже есть
// от прошлого успешного запуска.
async function fetchBlogPosts() {
  const func2urlPath = path.join(ROOT, 'backend/func2url.json');
  if (!fs.existsSync(func2urlPath)) {
    throw new Error('backend/func2url.json не найден');
  }
  const func2url = JSON.parse(fs.readFileSync(func2urlPath, 'utf8'));
  const blogUrl = func2url['blog-generate'];
  if (!blogUrl) {
    throw new Error('В backend/func2url.json нет адреса функции blog-generate');
  }

  const res = await fetch(blogUrl, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) {
    throw new Error(`blog-generate ответил статусом ${res.status}`);
  }
  const data = await res.json();
  return data.posts || [];
}

function buildArticleLd(post) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    url: `https://стальпро.com/blog/${post.slug}/index.html`,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'СтальПроКлапан',
      url: 'https://стальпро.com',
      logo: { '@type': 'ImageObject', url: 'https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg' },
    },
  });
}

async function generateBlogPages(template) {
  const errors = [];
  let posts;
  try {
    posts = await fetchBlogPosts();
  } catch (err) {
    console.error(`FAIL blog posts: не удалось получить список статей — ${err.message}`);
    return [`blog posts: ${err.message}`];
  }

  if (posts.length === 0) {
    console.log('Статей блога не найдено — пропускаю генерацию.');
    return errors;
  }

  for (const post of posts) {
    try {
      const canonical = `https://стальпро.com/blog/${post.slug}/index.html`;
      const html = buildArticleHtml(template, {
        title: `${post.title} — СтальПроКлапан`,
        description: post.excerpt,
        ogTitle: `${post.title} — СтальПроКлапан`,
        ogDescription: post.excerpt,
        canonical,
        image: post.image,
        articleLd: buildArticleLd(post),
      });

      const outPath = `public/blog/${post.slug}/index.html`;
      writeFile(outPath, html);
      console.log(`OK  ${outPath}`);
    } catch (err) {
      errors.push(`blog/${post.slug}: ${err.message}`);
      console.error(`FAIL blog/${post.slug}: ${err.message}`);
    }
  }

  return errors;
}

async function main() {
  const template = readFile(TEMPLATE_FILE);

  const productErrors = generateProductPages(template);
  const infoErrors = generateInfoPages(template);
  const blogErrors = await generateBlogPages(template);

  const allErrors = [...productErrors, ...infoErrors, ...blogErrors];
  const totalOk =
    PRODUCT_PAGES.length + INFO_PAGES.length - productErrors.length - infoErrors.length;

  if (allErrors.length > 0) {
    console.error(`\nГенерация SEO-страниц завершилась с ${allErrors.length} ошибкой(ами).`);
    // Не блокируем сборку из-за блога (сетевая зависимость) — но блокируем,
    // если сломались товарные или информационные страницы (это чисто
    // локальные данные, ошибка означает баг в скрипте или в исходнике).
    if (productErrors.length > 0 || infoErrors.length > 0) {
      process.exit(1);
    }
  }

  console.log(`\nГотово: обновлено ${totalOk} страниц (товары + инфостраницы), блог — отдельно выше.`);
}

main();