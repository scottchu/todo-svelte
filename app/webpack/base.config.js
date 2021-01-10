// plugins
const { ProgressPlugin } = require("webpack")
const merge = require("webpack-merge")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const sveltePreprocess = require("svelte-preprocess")

const {path: {project}} = require("../utils")

const css = require("./config/css")
const devServer = require("./config/devServer")

module.exports = (...args) => {
  const base = {
    entry: {
      app: project.src("index.ts")
    },
    output: {
      filename: "[name].js",
      path: project.dist()
    },
    resolve: {
      modules: [
        project.src(),
        project.node_modules()
      ],
      extensions: [".js", ".ts", ".svelte"],
      alias: {
        svelte: project.node_modules("svelte"),
        "lib": project.src("lib")
      },
      mainFields: ["svelte", "browser", "module", "main"],
    },
    module: {
      rules: [
        {
          test: /\.(html|svelte)$/,
          include: project.src(),
          exclude: [
            project.src("index.html"),
            project.node_modules()
          ],
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
          include: project.src(),
          exclude: [project.node_modules()],
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
        template: project.src("index.html")
      })
    ],
    devtool: "source-map" 
  }

  return merge(base, css(...args), devServer(...args))
}