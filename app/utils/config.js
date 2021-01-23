const { merge } = require("webpack-merge")

const use = (...configurations) => (...args) => {
  return merge(
    configurations
      .map(configuration => configuration(...args)))
}

module.exports = { use }