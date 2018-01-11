import { task } from 'gulp';
import del from 'del';

task('clean', (done) => {
    del.sync(['scriptsBuild', 'css']);
    done();
});