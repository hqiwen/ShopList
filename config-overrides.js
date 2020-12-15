const path = require("path");
const { override, useBabelRc } = require("customize-cra");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = override(
  // 新增：支持babel配置文件+++++++++
  useBabelRc()
);
