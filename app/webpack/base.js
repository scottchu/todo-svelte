// plugins
const { ProgressPlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const { path: {project}, config } = require("../utils")

const { css, devServer, svelte, typescript } = require("./config")

const base = () => {
  return {
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
        components: project.src("components")
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
}

module.exports = config.use(
  base, 
  css,
  devServer,
  svelte,
  typescript
)
