const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss =require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const jade = require('gulp-jade');
const inject = require('gulp-inject');

const srcPaths = {
    bowerDir: './bower_components',
    bootstrapDir: './bower_components/bootstrap-sass',
    devDir: './dev',
    sassPath: './dev/css',
};
const targetPaths = {
    cssDir: './dist/css',
    fontsDir: './dist/fonts',
    jsDir: './dist/js',
    viewsDir: './dist'
}
const JsScripts = [
    srcPaths.bowerDir + '/angular/angular.min.js',
    srcPaths.bowerDir + '/angular-route/angular-route.min.js',
    srcPaths.bowerDir + '/jquery/dist/jquery.min.js',
    srcPaths.bootstrapDir + '/assets/javascripts/bootstrap.min.js',
    srcPaths.bowerDir + '/font-awesome/js/fontawesome.min.js',
    srcPaths.devDir + '/js/app.js',
    srcPaths.devDir + '/js/services.js',
    srcPaths.devDir + '/js/controllers.js'
];

gulp.task('watch', () => {
    gulp.watch(srcPaths.sassPath + '/*.scss', gulp.series('css'));
    gulp.watch(srcPaths.devDir + '/**/*.js', gulp.series('js'));
    gulp.watch(srcPaths.devDir + '/**/*.jade', gulp.series('templates'));
})

gulp.task('js', () => {
    return gulp.src(JsScripts)
                .pipe(concat('app.js'))
                // .pipe(uglify()).on('error', (e) => {
                //     console.log('Uglify error:', e);
                // })
                .pipe(gulp.dest(targetPaths.jsDir));
});

gulp.task('css', () => {
    return gulp.src(srcPaths.sassPath + '/app.scss')
                .pipe(sass({
                    includePaths: [
                        srcPaths.bootstrapDir + '/assets/stylesheets', 
                        srcPaths.bowerDir + '/font-awesome/css/fontawesome.min.cssˆ'
                    ],
                }))
                .pipe(minifyCss())
                .pipe(gulp.dest(targetPaths.cssDir));
});

gulp.task('fonts', () => {
    return gulp.src(srcPaths.bootstrapDir + '/assets/fonts/**/*')
                .pipe(gulp.dest(targetPaths.fontsDir));
});

gulp.task('templates', () => {
    return gulp.src(srcPaths.devDir + '/views/**/*.jade')
                .pipe(jade({
                    pretty: true
                }))
                .pipe(gulp.dest(targetPaths.viewsDir));
});


gulp.task('default', gulp.parallel('css', 'fonts', 'js', 'templates'));