import gulp from 'gulp';

gulp.task('default', (done) => {
    gulp.series('watch', 'sass', 'scripts')();
    done();
});