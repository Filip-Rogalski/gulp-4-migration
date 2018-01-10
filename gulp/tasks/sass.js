import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import bs from 'browser-sync';

const sass = () => {
    const browserSync = bs.get('gulp-migration');
    
    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
}

export default sass;

/*
gulp.task('sass', () => {

    const browserSync = bs.get('gulp-migration');
    
    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

*/