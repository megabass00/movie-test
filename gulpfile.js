const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss =require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const jade = require('gulp-jade');
const inject = require('gulp-inject');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    devDir: './dev',
    sassPath: './dev/css',
    distDir: './dist'
};

gulp.task('watch', () => {
    gulp.watch(config.sassPath + '/*.scss', gulp.series('css'));
    gulp.watch(config.devDir + '/**/*.js', gulp.series('js'));
    gulp.watch(config.devDir + '/**/*.jade', gulp.series('templates'));
})

gulp.task('js', () => {
    return gulp.src(config.devDir + '/**/*.js')
                .pipe(concat('app.js'))
                .pipe(uglify())
                .pipe(gulp.dest(config.distDir + '/js'));
});

gulp.task('css', () => {
    return gulp.src(config.sassPath + '/app.scss')
                .pipe(sass({
                    includePaths: [config.bootstrapDir + '/assets/stylesheets'],
                }))
                .pipe(minifyCss())
                .pipe(gulp.dest(config.distDir + '/css'));
});

gulp.task('fonts', () => {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
                .pipe(gulp.dest(config.distDir + '/fonts'));
});

gulp.task('templates', () => {
    return gulp.src(config.devDir + '/views/**/*.jade')
                .pipe(jade({
                    pretty: true
                }))
                .pipe(gulp.dest(config.distDir));
});


gulp.task('default', gulp.parallel('css', 'fonts', 'js', 'templates'));