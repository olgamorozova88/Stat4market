const gulp = require("gulp");
const plumber = require("gulp-plumber");
const csso = require("gulp-csso");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const groupmedia = require("gulp-group-css-media-queries");
const rename = require("gulp-rename");
const sourcemap = require("gulp-sourcemaps");
const gulpif = require("gulp-if");

// Config

const path = require("../config/path.js");
const app = require("../config/app.js");

const style = () => {
  return gulp.src(path.style.src)
    .pipe(plumber())
    .pipe(gulpif(app.isDev, sourcemap.init()))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(groupmedia())
    .pipe(gulp.dest(path.style.dest))
    .pipe(csso())
    .pipe(rename( {suffix: ".min"} ))
    .pipe(gulpif(app.isDev, sourcemap.write(".")))
    .pipe(gulp.dest(path.style.dest));
}

module.exports = style;
