const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
// const concat = require('gulp-concat')
// const babel = require('gulp-babel')
// const watch = require('gulp-watch')
const browserSync = require('browser-sync')
const reload = browserSync.reload
var exec = require('child_process').exec;

gulp.task('styles', (done) => {
  gulp.src('assets/sass/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());

    done();
});

gulp.task('browser-sync',  gulp.series('styles', (done) => {
  browserSync.init({
        server: './public',
        notify: false,
        open: false
    });

    done();
}));

gulp.task('webpack', (cb) => {
  exec('webpack', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
});



gulp.task('default', gulp.series('styles', 'webpack', 'browser-sync', (done) => {
  gulp.watch('./assets/sass/**/*', gulp.series('styles'))
  gulp.watch('./assets/js/**/*', gulp.series('webpack'))
  gulp.watch(['./public/**/*', './public/*', '!public/js/**/.#*js', '!public/css/**/.#*css']).on('change', reload)
  done();
}));
