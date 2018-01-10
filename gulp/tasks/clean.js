import { task } from 'gulp';
import del from 'del';

const clean = (done) => {
    del.sync(['scriptsBuild', 'css']);
    done();
}

export default clean;