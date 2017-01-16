const gulp    = require('gulp');
const replace = require('gulp-replace');

gulp.task('default', function () {
  gulp.src(['src/config/*.ts'])
    .pipe(replace(new RegExp(/process.env.(\w+)/, 'g'), function (match, v) {
      let env = process.env[v] || '';

      return `'${env}'`;
    }))
    .pipe(gulp.dest('src/environments'));
});
