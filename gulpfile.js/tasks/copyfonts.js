const gulp = require("gulp");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");


// Config

const path = require("../config/path.js");

const copyfonts = () => {
  return gulp.src(path.font.src)
    .pipe(plumber())
    .pipe(newer(path.font.dest))
    .pipe(gulp.dest(path.font.dest));
}

module.exports = copyfonts;
