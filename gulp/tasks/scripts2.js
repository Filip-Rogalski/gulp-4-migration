import { task, src, dest } from 'gulp';
import babel from 'gulp-babel';

const scripts2 = () => {
    return src('./scripts/**/*.js')
        .pipe(babel())
        .pipe(dest('./scriptsBuild'));
}

task('scripts2', scripts2);