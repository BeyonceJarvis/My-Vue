module.exports = {
  lintOnSave: true, // 在保存代码的时候开启eslint代码检查机制
  devServer: { // 实时保存、编译的配置段
    open: true, // 自动开启浏览器
    host: 'www.xiaobai.com', // 服务主机名地址
    port: 80 // 服务运行端口
  }
}
