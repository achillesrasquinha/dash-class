var gulp     = require('gulp')
  , jshint   = require('gulp-jshint')
  , beautify = require('gulp-beautify')
  , uglify   = require('gulp-uglify')
  , rename   = require('gulp-rename')
  , src      = __dirname + '/src'
  , dist     = __dirname + '/dist';

gulp.task('build'  , function ( ) {
  return gulp.src (src + '/_class.js')
             .pipe(jshint())
             .pipe(jshint.reporter('default'))
             .pipe(beautify({ indentSize: 2 }))
             .pipe(gulp.dest(dist))
             .pipe(uglify())
             .pipe(rename({ suffix: '.min' }))
             .pipe(gulp.dest(dist));
});

gulp.task('default', ['build']);