// 安装依赖后，把 npm 里的 Butterfly 主题映射到 themes/butterfly
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'node_modules', 'hexo-theme-butterfly');
const dest = path.join(__dirname, '..', 'themes', 'butterfly');

if (!fs.existsSync(src)) {
  console.log('[link-theme] 未找到 hexo-theme-butterfly，跳过');
  process.exit(0);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, {
  recursive: true,
  filter: (s) => path.basename(s) !== 'node_modules'
});
console.log('[link-theme] 已把 Butterfly 主题链接到 themes/butterfly');
