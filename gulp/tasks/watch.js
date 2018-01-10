import gulp from 'gulp';

gulp.task('watch', gulp.series('browserSync', (done) => {
    gulp.watch('styles/*.scss', gulp.series('sass'));
    gulp.watch('scripts/**/*.js', gulp.series('scripts'));
    done();
}));
