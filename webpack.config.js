const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        })
    ],
    resolve:{
  alias:{
    "vue$":"vue/dist/vue.js"
  }
},
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        },
        {test:/\.vue$/,use:"vue-loader"},
        {test:/\.(png|jpg|jpeg|gif|bmp)$/,use:"url-loader?limit=7631&name=[hash:8]-[name].[ext]"},
        {test:/\.(ttf|woff|woff2|eot|svg)$/,use:"url-loader"},
        {test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
        ]
    }
}
