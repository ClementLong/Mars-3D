const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');

// Babel ♥️
gulp.task('babel', () => {
  return gulp.src('scripts/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('assets'))
});

// Sass ♥️
gulp.task('sass', () => {
  sass('styles/*.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['> 1%'],
        cascade: false
    }))
    .pipe(gulp.dest('assets'))
});

// Watch
gulp.task('watch', function () {
  gulp.watch('styles/*.scss', ['sass']);
  gulp.watch('scripts/*.js', ['babel']);
});

// Dev
gulp.task('dev', ['sass', 'babel']);

// Prod
gulp.task('prod', ['sass', 'babel', 'autoprefixer']);

// Default
gulp.task('default', ['dev']);
