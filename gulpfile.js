'use strict';

const fs = require('fs-extra');
const bowerJson = JSON.parse(fs.readFileSync(__dirname + '/bower.json'));

const libFile = bowerJson['main'];
const server = {
  host: 'localhost',
  port: '8080'
};

const gulp = require('gulp');
gulp.plugins = require('gulp-load-plugins')();

gulp.task('test', function (done) {
  new (require('karma').Server)({
    configFile: __dirname + '/karma.conf.js'
    //singleRun: true
  }, done).start();
});

gulp.task('ngdocs', [], function () {
  let options = {
    html5Mode: false,
    startPage: '/api/nix.track-api-client',
    titleLink: bowerJson["homepage"],
    title:     bowerJson["title"]
  };

  fs.removeSync('./docs/*');

  return gulp.src(libFile)
    .pipe(gulp.plugins.ngdocs.process(options))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['test', 'ngdocs'], function () {

  return gulp.src(libFile)
    .pipe(gulp.plugins.ngAnnotate())
    .pipe(gulp.plugins.rename(libFile.replace('.js', '.min.js')))
    .pipe(gulp.plugins.uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['build'], function () {

});

gulp.task('serve', ['build'], function () {
  gulp.watch(libFile, ['build']);

  gulp.src('.')
    .pipe(gulp.plugins.webserver({
      host:             server.host,
      port:             server.port,
      livereload:       false,
      directoryListing: true
    }));
});
