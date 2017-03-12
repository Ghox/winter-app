var gulp=require("gulp"),
      ugilfy = require("gulp-uglify"),
      plumber = require('gulp-plumber'),
      concat = require('gulp-concat'),
      run = require('gulp-run');


//In this case only have this css
gulp.task('styles', function(){
	gulp.src('client/**/bootstrap.min.css')
	.pipe(concat('app.css'))
	.pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function(){
	gulp.src(['client/libs/jquery.min.js', 'client/libs/angular.min.js', 'client/libs/ng-resource.min.js', 'client/libs/ng-route.min.js','client/app/**/*.js'])
	.pipe(plumber())
	.pipe(concat('dest.js'))
	.pipe(ugilfy())
	.pipe(gulp.dest('build/js'));
});

gulp.task('libs', function(){
	gulp//.src('client/libs/**/*.*')
	.src(['client/libs/jquery.min.js', 'client/libs/angular.min.js', 'client/libs/ng-resource.min.js', 'client/libs/ng-route.min.js'])
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('build/libs'));
});

gulp.task('html', function(){
	gulp.src('client/app/**/*.html')
	.pipe(gulp.dest('build/app'));
});


//Watch Task
//Watches js file changes
gulp.task('watch', function(){
	gulp.watch("client/**/*.js", ["scripts"])
});

gulp.task('runProduction', function(){
	run('node server/app.js').exec();
});

gulp.task('runDevelop', function(){
	run('NODE_ENV="develop" node server/app.js').exec();
});

gulp.task('default', ['scripts', 'styles', 'html', 'runProduction']);

gulp.task('develop',  ['scripts', 'styles', 'runDevelop', 'watch']);