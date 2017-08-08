module.exports = function(config) {
  let isProduction = process.env.NODE_ENV === 'production'
  let serverConf = {
    //代理
    proxy: {
      isProxy: false,
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
      // path: __dirname + '/../mock/data',
      // uploadUrl: '',
      // uploadDir: ''
    },
    port: 8882,
    type: 'express',
    //热替换与hash冲突
    hotRepalce: !isProduction,
    compression: config.productionGzip,
    autoOpenBrowser: true,
    fallback: true
  }

  if (isProduction) {
    serverConf.statics = [{
      url: '/',
      path: config.dest.path
    }]
  }

  //NOTICE: withHash 与 hotRepalce 冲突
  if (config.withHash) {
    serverConf.hotRepalce = false
  }
  return serverConf
}