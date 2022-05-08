const pathSrc = "./src";
const pathDest = "./build";

module.exports = {
  root: pathDest,

  html: {
    src: `${pathSrc}/*.html`,
    watch: `${pathSrc}/*.html`,
    dest: pathDest
  },

  style: {
    src: `${pathSrc}/scss/style.scss`,
    watch: `${pathSrc}/scss/**/*.scss`,
    dest: `${pathDest}/css`
  },

  img: {
    src: `${pathSrc}/img/**/*.{jpg,png}`,
    watch: `${pathSrc}/img/**/*.{jpg,png}` ,
    dest: `${pathDest}/img`
  },

  svg: {
    src: `${pathSrc}/img/**/*.svg`,
    watch: `${pathSrc}/img/**/*.svg` ,
    dest: `${pathDest}/img`
  },

  font: {
    src: `${pathSrc}/fonts/*.*`,
    watch: `${pathSrc}/fonts/*.*` ,
    dest: `${pathDest}/fonts`
  }
}
