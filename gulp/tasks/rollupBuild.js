import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babel from 'gulp-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import builtins from 'rollup-plugin-node-builtins';

const rollupJS = (inputFile, options) => {
    return () => {
        return rollup({
            input: options.basePath + inputFile,
            format: options.format,
            sourcemap: options.sourcemap,
            plugins: [ commonjs(), resolve({
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            }) /*, builtins() */ ],
            external: ['jquery']
        })
        .pipe(source(inputFile, options.basePath))
        .pipe(buffer())
        .pipe(babel())
        .pipe(gulp.dest(options.distPath));
    }
}

gulp.task('rollupBuild', rollupJS('main.js', {
    basePath: './scripts/',
    format: 'cjs',
    distPath: './rollupBundle',
    sourcemap: true,
}));
