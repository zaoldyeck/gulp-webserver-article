var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('webserver', function () {
    plugins.connect.server({
        livereload: true,
        root: ['.', '.tmp']
    });
});

gulp.task('livereload', function () {
    gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'])
        .pipe(plugins.watch())
        .pipe(plugins.connect.reload());
});

gulp.task('less', function () {
    gulp.src('styles/main.less')
        .pipe(plugins.less())
        .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('coffee', function () {
    gulp.src('scripts/*.coffee')
        .pipe(plugins.coffee())
        .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('watch', function () {
    gulp.watch('styles/*.less', ['less']);
    gulp.watch('scripts/*.coffee', ['coffee']);
})

gulp.task('default', ['less', 'coffee', 'webserver', 'livereload', 'watch']);