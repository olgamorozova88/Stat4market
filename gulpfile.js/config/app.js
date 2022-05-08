const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,

  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },

  imgmin: {
    progressive: true,
    optimizationLevel: 3
  },

  webp: {
    quality: 90,
  }

}
