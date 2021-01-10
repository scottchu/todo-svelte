// plugins
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { Path } = require("../utils/path")
const root = Path(__dirname, "..")

module.exports = (_, {mode = "development"} = {}) => {
  return {
    entry: {
      app: root.src("index.js")
    },
    output: {
      filename: "[name].js",
      path: root.dist()
    },
    resolve: {
      modules: [
        root.src(),
        root.node_modules()
      ],
      extensions: [".js"],
      alias: {
        "lib": root.src("lib")
      }
    },
    module: {
      rules: [
      ]
    },
    plugins: [
      new ProgressPlugin(),
      new HtmlWebpackPlugin({ 
        filename: 'index.html',
        template: root.src("index.html")
      })
    ],
    devServer: {
      contentBase: root.dist(),
      historyApiFallback: true,
      host: "0.0.0.0",
      hot: true,
      port: process.env.PORT || 80
    },
    devtool: "source-map" 
  }
}