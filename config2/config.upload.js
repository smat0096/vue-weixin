module.exports = function(config){
  return {
    // 远程服务器上传配置
    localPath: config.dest.path,
    // 远程服务器上传配置
    // html文件上传配置
    html: {
      clear: false
    },
    // 资源文件上传配置
    source: {
      clear: true
    }
  }
}