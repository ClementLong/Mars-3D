const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('gulp-browserify');

// Tache clean DEL

// Babel ♥️ & Browserify
gulp.task('babel', () => {
  return gulp.src('app/scripts/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('dist'))
});

// Sass ♥️
gulp.task('sass', () => {
  sass('app/styles/*.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['> 1%'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
});

// Watch
gulp.task('watch', function () {
  gulp.watch('app/styles/*.scss', ['sass']);
  gulp.watch('app/scripts/*.js', ['babel']);
});

// Dev
gulp.task('dev', ['sass', 'babel']);

// Prod
gulp.task('prod', ['sass', 'babel', 'autoprefixer']);

// Default
gulp.task('default', ['dev']);
