let isProd = process.env.NODE_ENV === 'production'
let prod = require('./config.prod.js')
module.exports = {
  browserSync: {
    index: 'index.html',
    startPath: '/loading.html'
  },
  //代理
  proxy: {
    isProxy: true,
    proxyTable: {
      '/xbs/p/interface': {
        target: 'http://xbs.app.abs50.com',
        changeOrigin: true,
        pathRewrite: {
          //'^/product': '/product'
        }
      }
    }
  },
  //模拟数据
  mock: {
    isMock: false,
    path: __dirname + '/../mock/data',
    uploadUrl: '',
    uploadDir: ''
  },
  serverType: 'middleware',
  //热替换与hash冲突
  hotRepalce: !isProd,
  autoOpenBrowser: false
}