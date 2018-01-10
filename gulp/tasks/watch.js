import gulp from 'gulp';
import sass from './sass.js';

const watch = gulp.series('browserSync', gulp.parallel(
    (done) => {
        gulp.watch('styles/*.scss', gulp.series(sass));
        done();
    }, 
    (done) => {
        gulp.watch('scripts/**/*.js', gulp.series('scripts'));
        done();
    }
));

export default watch;