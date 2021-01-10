const { project } = require("../../utils/path")

const port = ({defaultTo = 80} = {}) => {
  return process.env.PORT || defaultTo
}

const host = () => "0.0.0.0"

module.exports = () => {
  return {
    devServer: {
      contentBase: project.dist(),
      historyApiFallback: true,
      host: host(),
      hot: true,
      port: port({defaultTo: 80})
    },
  }
}