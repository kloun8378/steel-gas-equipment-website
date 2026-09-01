// package.json и vite.config.ts на этой платформе доступны только для чтения,
// поэтому не получилось подключить генератор статичных SEO-страниц через
// стандартный npm-хук "prebuild". PostCSS гарантированно вызывается один раз
// в самом начале каждой сборки (до обработки любых файлов), поэтому именно
// здесь запускается scripts/generate-seo-pages.mjs — он актуализирует
// public/.../index.html данными из src/pages/*.tsx (цена, описание, title и т.д.)
// перед тем, как Vite соберёт и скопирует public/ в финальный билд.
try {
  require('child_process').execFileSync(
    process.execPath,
    [require('path').join(__dirname, 'scripts/generate-seo-pages.mjs')],
    { stdio: 'inherit' }
  );
} catch (err) {
  console.error('[generate-seo-pages] Не удалось обновить статичные SEO-страницы:', err.message);
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}