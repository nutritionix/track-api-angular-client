'use strict';

const argv = require('yargs').argv;
const fs = require('fs-extra');
const bowerJson = JSON.parse(fs.readFileSync(__dirname + '/bower.json'));

const libFile = bowerJson['main'];
const server = {
  host: 'localhost',
  port: '8080'
};

const gulp = require('gulp');
gulp.plugins = require('gulp-load-plugins')();

gulp.task('setVersion', function () {
  let version = argv.version;
  if (!version) {
    console.error('--version=x.x.x param is required');
    process.exit(1);
    return;
  }

  ['bower.json', 'package.json'].forEach(file => {
    file = __dirname + '/' + file;
    fs.writeFileSync(
      file,
      fs.readFileSync(file)
        .toString()
        .replace(/"version":\s*"[\d.]+?"/, `"version": "${version}"`)
    );
  });

  fs.writeFileSync(
    libFile,
    fs.readFileSync(libFile)
      .toString()
      .replace(/@version\s+[^\s\n]+/, `@version ${version}`)
  );
});

gulp.task('test', function (done) {
  new (require('karma').Server)({
    configFile: __dirname + '/karma.conf.js'
    //singleRun: true
  }, done).start();
});

gulp.task('ngdocs', [], function () {
  let filter = gulp.plugins.filter(['index.html'], {restore: true});
  let options = {
    html5Mode: false,
    startPage: '/api/nix.track-api-client',
    titleLink: bowerJson["homepage"],
    title:     bowerJson["title"]
  };

  fs.removeSync('./docs/*');

  return gulp.src(libFile)
    .pipe(gulp.plugins.ngdocs.process(options))
    .pipe(filter)
    .pipe(gulp.plugins.replace("addTag('base', {href: baseUrl});", ""))
    .pipe(filter.restore)
    .pipe(gulp.dest('./docs'))
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
