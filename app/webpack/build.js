// plugins
const base = require("./base")
const { optimization } = require("./config")

const { config } = require("../utils")

module.exports = config.use(base, optimization)