const gulp = require("gulp");
const plumber = require("gulp-plumber");
const htmlmin = require("gulp-htmlmin");

// Config

const path = require("../config/path.js");
const app = require("../config/app.js");

const html = () => {
  return gulp.src(path.html.src)
    .pipe(htmlmin(app.htmlmin))
    .pipe(plumber())
    .pipe(gulp.dest(path.html.dest));
}

module.exports = html;
