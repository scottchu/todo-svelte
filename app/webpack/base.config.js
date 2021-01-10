// plugins
const { ProgressPlugin } = require("webpack")
const merge = require("webpack-merge")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const sveltePreprocess = require("svelte-preprocess")

const { Path } = require("../utils/path")
const root = Path(__dirname, "..")

const cssConfig = require("./css.config")

module.exports = (...args) => {
  const base = {
    entry: {
      app: root.src("index.ts")
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
      extensions: [".js", ".ts", ".svelte"],
      alias: {
        svelte: root.node_modules("svelte"),
        "lib": root.src("lib")
      },
      mainFields: ["svelte", "browser", "module", "main"],
    },
    module: {
      rules: [
        {
          test: /\.(svelte)$/,
          include: root.src(),
          exclude: [root.node_modules()],
          use: {
            loader: "svelte-loader",
            options: {
              hotReload: true,
              emitCss: true,
              preprocess: sveltePreprocess({})
            },
          },
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          include: root.src(),
          exclude: [root.node_modules()],
          options: {
            transpileOnly: true,
          },
        }
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

  return merge(base, cssConfig(...args))
}