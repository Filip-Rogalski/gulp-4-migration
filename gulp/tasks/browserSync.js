import bs from 'browser-sync';
import gulp from 'gulp';

const browserSync = bs.create('gulp-migration');

gulp.task('browserSync', (done) => {

    bs.init({
        server: {
            baseDir: './'
        },
        port: '1337',
        browser: 'chrome'
    });
    done();
})
