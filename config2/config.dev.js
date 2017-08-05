let prod = require('./config.prod.js')
module.exports = {
  // HTML中 引用资源(JS,CSS,图片) 的基础路径 注意尾部加斜杠 /
  publicPath: '/',
  // CSS中 引用资源(图片) 的基础路径 使用本地相对路径所以返回上一级
  publicPathInCss: '../',
  // 环境&业务全局数据
  env: Object.assign(prod.env, {
    NODE_ENV: 'development',
    URL_PORT: '8882'
  })
}
