// plugins
const { ProgressPlugin } = require("webpack")
const { merge } = require("webpack-merge")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const {path: {project}} = require("../utils")

const css = require("./config/css")
const devServer = require("./config/devServer")
const svelte = require("./config/svelte")
const typescript = require("./config/typescript")

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
      extensions: [".js", ".json"],
      alias: {
        lib: project.src("lib"),
      },
    },
    module: {
      rules: [
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

  const config = merge(
    base, 
    css(...args), 
    devServer(...args), 
    typescript(...args), 
    svelte(...args)
  )

  return config
}