// Генератор статичных SEO-версий товарных страниц (public/.../index.html).
//
// Зачем: поисковые роботы (Яндекс, Google) не всегда выполняют JS, поэтому для
// карточек товаров и категорий лежат заранее собранные HTML-файлы с уникальными
// title/description/canonical/JSON-LD. Раньше эти файлы редактировались вручную
// и рассинхронизировались с реальными данными на странице (ценой, описанием).
//
// Что делает скрипт: читает исходники src/pages/*.tsx (там хранится единственный
// источник правды — цена, название, описание, теги), вычисляет реальные значения
// констант и JSON.stringify-строк через esbuild + vm, подставляет их в общий
// HTML-шаблон и перезаписывает файлы в public/. Общий шаблон и общие блоки
// JSON-LD (Organization/LocalBusiness/WebSite) берутся из уже существующего
// эталонного файла public/speed-valve/tpa11-050/index.html, чтобы не дублировать
// их здесь ещё раз.
//
// Запускается автоматически перед каждой сборкой (см. "prebuild" в package.json).

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

// Файл-эталон: из него берём общую разметку (head-обвязку, скрипт подгрузки
// бандла, Метрику) и общие JSON-LD блоки (Organization/LocalBusiness/WebSite).
const TEMPLATE_FILE = 'public/speed-valve/tpa11-050/index.html';

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

function writeFile(relPath, content) {
  fs.writeFileSync(path.join(ROOT, relPath), content, 'utf8');
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
// его имени/значению атрибута. Теги на товарных страницах гарантированно
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
  return { title, description, ogTitle, ogDescription };
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

function buildHtml(template, data) {
  let html = template;

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

  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${escapeAttr(data.image)}" />`,
  );

  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${escapeAttr(data.image)}" />`,
  );

  // Product Schema — единственный блок JSON-LD, который отличается для
  // каждого товара. productLd приходит уже как JSON.stringify-строка из
  // исходника страницы — перепарсиваем и форматируем с отступами для
  // читаемости файла (сама строка компактная, без переносов).
  const prettyProductLd = JSON.stringify(JSON.parse(data.productLd), null, 6);
  html = html.replace(
    /(<!-- Product Schema -->\s*<script type="application\/ld\+json">\n)[\s\S]*?(\n\s*<\/script>)/,
    `$1${prettyProductLd}$2`,
  );

  return html;
}

function main() {
  const template = readFile(TEMPLATE_FILE);
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

      const html = buildHtml(template, {
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

  if (errors.length > 0) {
    console.error(`\nГенерация SEO-страниц завершилась с ${errors.length} ошибкой(ами).`);
    process.exit(1);
  }

  console.log(`\nГотово: обновлено ${PRODUCT_PAGES.length} SEO-страниц.`);
}

main();