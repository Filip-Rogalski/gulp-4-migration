import { task, dest } from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import bs from 'browser-sync';

const buildDev = (done) => {
    const browserSync = bs.get('gulp-migration');

    const bundler = browserify({
        entries: './scriptsBuild/main.js',
        cache: {},
        packageCache: {},
        fullPaths: false,
        debug: true
    });

    // bundler.plugin(watchify, {
    //     ignoreWatch: ['**/node_modules/**']
    // });

    const rebundle = () => {
        const stream = bundler.bundle();
        return stream.on('error', (err) => {
                gutil.log(err);
            })
            .pipe(source('main.js'))
            .pipe(dest('scriptsBuild'))
            .pipe(browserSync.stream());
    }

    // bundler.on('update', rebundle);

    // bundler.on('log', gutil.log);

    rebundle();

    done();
};

task('scripts3', buildDev);