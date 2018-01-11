import gulp from 'gulp';
import sass from './sass.js';
import watch from './watch.js';

const build = gulp.series(watch, 'clean', gulp.parallel(sass, 'scripts'));
gulp.task('default', build);