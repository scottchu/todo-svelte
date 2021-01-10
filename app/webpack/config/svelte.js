const sveltePreprocess = require("svelte-preprocess")

const {path: {project}} = require("../../utils")

module.exports = () => {
  return {
    resolve: {
      extensions: [".svelte", ".mjs"],
      alias: {
        svelte: project.node_modules("svelte"),
      },
      mainFields: ["svelte", "browser", "module", "main"],
    },
    module: {
      rules: [
        {
          test: /\.(html|svelte)$/,
          include: [project.src()],
          exclude: [
            project.src("index.html"),
            project.node_modules()
          ],
          use: {
            loader: "svelte-loader",
            options: {
              emitCss: false,
              preprocess: sveltePreprocess({})
            },
          },
        }
      ]
    },
    plugins: [
    ],
  }
}