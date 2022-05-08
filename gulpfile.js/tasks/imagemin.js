const gulp = require("gulp");
const plumber = require("gulp-plumber");
const imgmin = require("gulp-imagemin");
const webp = require("gulp-webp");
const newer = require("gulp-newer");
const gulpif = require("gulp-if");

// Config

const path = require("../config/path.js");
const app = require("../config/app.js");

const imagemin = () => {
  return gulp.src(path.img.src)
    .pipe(plumber())
    .pipe(newer(path.img.dest))
    .pipe(webp(app.webp))
    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src))
    .pipe(gulpif(app.isProd, imgmin(app.imgmin)))
    .pipe(gulp.dest(path.img.dest));
}

module.exports = imagemin;
