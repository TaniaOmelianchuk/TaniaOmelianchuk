const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('styles/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('dist/css'));
}

function watch() {
  gulp.watch('styles/scss/style.scss', buildStyles);
}

exports.build = buildStyles;
exports.watch = watch;