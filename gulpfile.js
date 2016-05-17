var Path = require('path');
var Gulp = require('gulp');
var Newer = require('gulp-newer');
var Concat = require('gulp-concat');
var Sass = require('gulp-sass');
var Webserver = require('gulp-webserver');
var runSequence = require('run-sequence');

Gulp.task('sass', function () {

    var bundleConfigs = [{
        entries: [
            './src/sass/variables.scss',
            './src/sass/bootstrap.scss',
            './src/sass/font-awesome.scss',
            './src/sass/custom.scss'
        ],
        dest: './dist/client/',
        outputName: 'so-much-style.min.css'
    }];

    return bundleConfigs.map(function (bundleConfig) {

        return Gulp.src(bundleConfig.entries)
            .pipe(Newer(Path.join(bundleConfig.dest, bundleConfig.outputName)))
            .pipe(Concat(bundleConfig.outputName))
            .pipe(Sass({outputStyle: 'compressed'}))
            .pipe(Gulp.dest(bundleConfig.dest));
    });
});


Gulp.task('watch', function () {

    global.isWatching = true;
 
    Gulp.watch('./style/**/*.scss', ['sass']);

});

Gulp.task('webserver', function() {
  Gulp.src('public/')
    .pipe(Webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      directoryListing: false
    }));
});

Gulp.task('build', function(done) {
    runSequence('sass', function() {
        done();
    });
});

Gulp.task('default', ['watch', 'build']);


