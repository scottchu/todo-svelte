const { merge } = require("webpack-merge")

const use = (...configurations) => (...args) => {
  const applied = configurations
    .map(configuration => configuration(...args))
  return  merge(applied)
}

module.exports = { use }