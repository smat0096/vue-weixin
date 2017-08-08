// webpackConfig extend 扩展
module.exports = function(configOrigin) {
  return {
    // 扩展参数
    webpackConfig: {},

    //扩展函数
    webpackConst: function(config, webpackConfig) {
      // 去除 "modules": false 
      webpackConfig.module.rules.forEach((rule)=>{
        if( rule.test.toString() == /\.js$/.toString()){
          rule.options.presets[0] = "env"
        }
      })
      return webpackConfig
    }
  }
}
