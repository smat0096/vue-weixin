'use strict'
let srcPath = __dirname + '/../src'
let destPath = __dirname + '/../dist'
let path = require('path')
let prod = require('./config.prod.js')
let config = {
  src: {
    path: srcPath,
    // 页面html
    pages: {
      'main': {
        'title': '我的微信',
        'template': __dirname + '/../index.html'
      }
    },
    // 入口js
    entry: {
      main: [srcPath + '/main.js']
    },
    // 图标
    favicon: srcPath + '/iamges/favicon.ico',
    // node_modules第三方库( Boolean | Array)
    vendor: true
  },
  dest: {
    path: destPath
  },
  //测试文件配置
  test: {
    path: __dirname + '/../test',
    baseUrl: 'http://localhost:80'
  },
  // 别名
  alias: {
    '@': srcPath,
    'node_modules': __dirname + '/../node_modules',
    'ksutils': '@/utils/ksutils',
    'vue$': 'node_modules/vue/dist/vue.common.js',
    'src': path.resolve(__dirname, '../src'),
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
