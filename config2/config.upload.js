module.exports = {
  // 远程服务器上传配置
  // html文件上传配置
  uploadHtml: {
    host: '192.168.1.205',
    port: '21',
    user: 'xiaoboshi',
    password: '123456',
    parallel: 2,
    dest: '/',
    clear: false
  },
  // 资源文件上传配置
  uploadSource: {
    host: '192.168.1.205',
    port: '21',
    user: 'xiaoboshi',
    password: '123456',
    parallel: 2,
    dest: '/',
    clear: true
  }
}
