// webpackConfig extend 扩展
module.exports = {
  // 扩展参数
  webpackConfig: {},

  //扩展函数
  webpackConst: function(config, webpackConfig) {
    // 为vux文件指定 babel-loader
    let babelrc = require(process.cwd() + '/build/.babelrc.js')(config)
    webpackConfig.module.rules.push(
      {
          test: /vux.src.*?js$/,
          include: [/node_modules/],
          loader: 'babel-loader',
          options: Object.assign({
            babelrc: false,
            cacheDirectory: true
          }, babelrc)
      }
    )
    // 因vux-loader路径自动指定到 xbs 目录下, 载入失败 !!! 尝试手动指定路径至 kspack 下
    let vuxLoader = require(process.cwd() + '/node_modules/vux-loader/src/index.js')
    webpackConfig = vuxLoader.merge(
      webpackConfig,
      {
        plugins: ['vux-ui']
      }
    )
    return webpackConfig
  }

}
