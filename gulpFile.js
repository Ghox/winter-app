var gulp=require("gulp"),
      ugilfy = require("gulp-uglify"),
      plumber = require('gulp-plumber'),
      concat = require('gulp-concat'),
      run = require('gulp-run');
gulp.task('styles', function(){
	console.log('styles');
});

gulp.task('scripts', function(){
	gulp.src(['client/**/*.js', '!client/libs/**/*.js'])
	.pipe(plumber())
	.pipe(concat('dest.js'))
	.pipe(ugilfy())
	.pipe(gulp.dest('build/js'));
});

gulp.task('moveLibs', function(){
	gulp.src("client/libs/**/*.*")
	      .pipe(gulp.dest('build/libs'));
})

//Watch Task
//Watches js file changes
gulp.task('watch', function(){
	gulp.watch("client/**/*.js", ["scripts"])
});

gulp.task('runNode', function(){
	run('node server/app.js').exec();
})

gulp.task('default', ['scripts', 'styles', 'moveLibs', 'runNode', 'watch']);