const gulp = require("gulp");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");


// Config

const path = require("../config/path.js");

const copysvg = () => {
  return gulp.src(path.svg.src)
    .pipe(plumber())
    .pipe(newer(path.svg.dest))
    .pipe(gulp.dest(path.svg.dest));
}

module.exports = copysvg;
