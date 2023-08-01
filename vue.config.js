module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

const HtmlWebpackPlugin = require('html-webpack-plugin')
const BASE_URL = './public'
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // configureWebpack: {
  //   plugins: [
  //     // HTML根相关配置
  //     new HtmlWebpackPlugin({
  //       template: './public/index.html',
  //       title: '洛子路演',
  //       BASE_URL: BASE_URL
  //     })
  //   ]
  // },
  // configureWebpack: config => {
  //   return {
  //     plugins: [new CompressionPlugin({
  //       test: /\.js$|\.html$|\.jpg$|\.css/,
  //       threshold: 10240,
  //       deleteOriginalAssets: false,
  //     })]
  //   }
  // },
  // configureWebpack: {
  //   plugins: [
  //     // HTML根相关配置
  //     new HtmlWebpackPlugin({
  //       filename: 'index.html',
  //       template: 'public/index.html',
  //       favicon: 'src/assets/favicon.png'
  //     })
  //   ]
  // },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页 | 作文题目列表',
      favicon: 'src/assets/favicon.png'
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      //   chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    writting: {
      entry: 'src/mainForWrittingPage.js',
      template: 'public/writting.html',
      filename: 'writting.html',
      title: '写作',
      favicon: 'src/assets/favicon.png'
    }
  },
  devServer: {
    port: 8081, // 端口号
    proxy: 'http://localhost:8080' // 配置跨域处理,只有一个代理
  }
}