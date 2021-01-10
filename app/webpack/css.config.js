const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isProduction = (mode) => {
  return mode === "production"
}

const uses = (mode) => {
  const loader = (isProduction(mode) ? MiniCssExtractPlugin.loader : "style-loader")
  return [loader, "css-loader"]
}

const plugins = (mode) => {
  return isProduction(mode) ? [new MiniCssExtractPlugin("styles.css")]: []
}

const config = (_, {mode = "development"} = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: uses(mode)
        }
      ]
    },
    plugins: plugins(mode)
  }
}

module.exports = config