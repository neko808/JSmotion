
const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile sccs into css
function style(){
   
	// 1. where is my scss file
	return gulp.src('./scss/*.scss')

	// 2. pass that file through sass compiler
	.pipe(sass())
		//.on('error', sass.logError))
	// 3. where do I save the compíled css?
	.pipe(gulp.dest('./css'))
	// 4. stream changes to all browsers
	.pipe(browserSync.stream());
	}



function watch(){
	browserSync.init({
		server: {
		baseDir: './'
		}
	});

	gulp.watch('./scss/*.scss', style);
	gulp.watch('./js/*.js').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
}



exports.style = style;
exports.watch = watch;