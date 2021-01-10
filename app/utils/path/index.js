const { resolve } = require("path")

const Path = (...base) => {
  const handler = {
    get: (target, prop, _receiver) => {
      const newTarget = (...args) => target(prop, ...args)
      return new Proxy(newTarget, handler)
    }
  }
  
  const path = (...args) => resolve(...base, ...args)

  return new Proxy(path, handler)
}

const project = Path(__dirname, "..", "..")

module.exports = { Path, project }