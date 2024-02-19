const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 方式一
  // devServer:{
  //   proxy:'http://localhost:5001'
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/api':''},
        ws: true, // 用於支持 websocket
        changeOrigin: true // 用於控制請求頭中的 host 值
      },
      '/cars': {
        target: 'http://localhost:5003',
        pathRewrite:{'^/cars':''},
        ws: true, // 用於支持 websocket
        changeOrigin: true // 用於控制請求頭中的 host 值
      }
    }
  }
})