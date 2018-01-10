import { task, dest } from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import bs from 'browser-sync';

const buildDev = (file) => {
    const browserSync = bs.get('gulp-migration');

    const bundler = browserify({
        entries: './scripts/main.js',
        cache: {},
        packageCache: {},
        fullPaths: false,
        debug: true
    }).transform("babelify", {presets: ["es2015", "stage-0"]});

    bundler.plugin(watchify, {
        ignoreWatch: ['**/node_modules/**']
    });

    bundler.on('update', () => {
       rebundle();
    });

    // bundler.on('log', gutil.log);

    const rebundle = () => {
        const stream = bundler.bundle();
        return stream.on('error', (err) => {
                gutil.log(err);
            })
            .pipe(source('main.js'))
            .pipe(dest('scriptsBuild'))
            .pipe(browserSync.stream());
    }

    return rebundle();
};

task('scripts', () => {
    return buildDev();
});