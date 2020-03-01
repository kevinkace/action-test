
const gulp         = require('gulp');
const less         = require('gulp-less');

gulp.task('default', function() {
    return gulp.src('src/*.less')
        // .pipe(plumber({
        //     errorHandler : function(err) {
        //         notify.onError({
        //             title   : 'Sass Error',
        //             message : '<%= error.message %>'
        //         })(err);
        //     }
        // }))
        // .pipe(sourcemaps.init())
        .pipe(less())
        // .pipe(autoprefixer({
        //     browsers : [ 'last 3 versions', 'iOS >= 9' ],
        //     cascade  : false
        // }))
        // .pipe(uglifycss())
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/.'));
});