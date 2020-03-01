
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const header = require('gulp-header');
const uglify = require('gulp-uglifycss');
const noop = require('gulp-noop');

const args = process.argv;

gulp.task('default', function() {
    const production = args.includes('--production');

    console.log(`prod: ${production}`);

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
        .pipe(rename(path => {
            if (production) {
                path.basename += ".min";
            }
        }))
        .pipe(production ? uglify() : noop())
        .pipe(header(`/* build: ${Date.now()} */\n`))
        // .pipe(autoprefixer({
        //     browsers : [ 'last 3 versions', 'iOS >= 9' ],
        //     cascade  : false
        // }))
        // .pipe(uglifycss())
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/.'));
});