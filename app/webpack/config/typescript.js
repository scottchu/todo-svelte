const { project } = require("../../utils/path")

const typescript = () => {
  return {
    resolve: {
      extensions: [".ts"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          include: project.src(),
          exclude: [
            project.node_modules()
          ],
          options: {
            transpileOnly: true,
          },
        }
      ]
    },
  }
}

module.exports = typescript