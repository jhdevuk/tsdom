var gulp = require('gulp');
var sequence = require('gulp-sequence');
var config = require('./task/config');


/* -----------------------------------
 *
 * Task
 *
 * -------------------------------- */

function task(task) {
   return require('./task/' + task)(config, gulp);
}


/* -----------------------------------
 *
 * JS
 *
 * -------------------------------- */

gulp.task('js:build', task('js-build'));


/* -----------------------------------
 *
 * Default
 *
 * -------------------------------- */

gulp.task('default', sequence(
   ['js:build']
   // 'watch'
));