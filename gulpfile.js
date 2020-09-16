var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');

gulp.task('scripts', async function () {
  return gulp.src('src/*.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles', async function () {
  return gulp.src('src/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('pages', async function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', gulp.parallel('scripts', 'styles', 'pages'));