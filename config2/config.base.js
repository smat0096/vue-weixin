'use strict'
let srcPath = __dirname + '/../src'
let destPath = __dirname + '/../weixin'
let path = require('path')
let prod = require('./config.prod.js')
let config = {
  src: {
    path: srcPath,
    // 页面html
    pages: {
      'index': {
        'title': '我的微信',
        'template': __dirname + '/../index.html'
      }
    },
    // 入口js
    entry: {
      index: [srcPath + '/main.js']
    },
    // 图标
    favicon: srcPath + '/images/favicon.ico',
    // node_modules第三方库( Boolean | Array)
    vendor: true
  },
  dest: {
    path: destPath
  },
  // 别名
  alias: {
    '@': srcPath,
    'node_modules': __dirname + '/../node_modules',
    'ksutils': '@/utils/ksutils',
    'vue$': 'node_modules/vue/dist/vue.common.js',
    'src': srcPath,
    'assets': path.resolve(__dirname, '../src/assets'),
    'components': path.resolve(__dirname, '../src/components')
  }
}

config = Object.assign(
  config,
  prod,
  require('./config.dev.js'),
  require('./config.server.js'),
  require('./config.upload.js')
)

if (process.env.NODE_ENV === 'production') {
  config = Object.assign(
    config,
    prod
  )
}

// config.webpackExtend = require('./config.webpack-extend.js')

module.exports = config
