var gulp = require('gulp');
var del = require('del');
var run = require('gulp-run');
var sequence = require('run-sequence');

gulp.task('clean:jsx', function () {
    return del([
        '.jsx-cache/**/*',
        './js/views/components',
        'release-build/**/*'
    ])
});

gulp.task('build:jsx', function () {
    return run('npm run jsx').exec();
});

gulp.task('build:r-optimize', function () {
    return run('npm run optimize',{silent:true, verbosity:3}).exec();
});

gulp.task('clean:post-build', function () {
    return del([
        'release-build/\.*/**/*',
        'release-build/\.*',
        'release-build/*.*',
        '!release-build/*.html',
        'release-build/node_modules/**/*',
        'release-build/node_modules/bootstrap/*.*',
        '!release-build/node_modules/bootstrap/**',
        '!release-build/node_modules/bootstrap/dist/**'
    ]);
});

// ------------------------

gulp.task('watch', function () {
    return run('npm run jsx-watch').exec();
});

gulp.task('default', function () {
        sequence(
            'clean:jsx',
            'build:jsx',
            'build:r-optimize',
            'clean:post-build');
    }
);

