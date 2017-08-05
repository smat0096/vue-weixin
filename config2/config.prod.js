let isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: '',
  publicPathInCss: '../',
  //gzip
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  //分析报告视图
  bundleAnalyzerReport: false,
  //压缩, hash, sourceMap
  withHash: isProd,
  minHtml: isProd,
  minCss: isProd,
  minJs: isProd,
  minImg: isProd,
  sourceMap: false,
  // 远程服务器数据接口
  env: {
    NODE_ENV: 'production'
  }
}