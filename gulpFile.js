var gulp=require("gulp"),
      ugilfy = require("gulp-uglify"),
      plumber = require('gulp-plumber'),
      concat = require('gulp-concat'),
      nodemon = require('gulp-nodemon');


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

gulp.task('index', function(){
	gulp.src('index.html')
	.pipe(gulp.dest('build'));
});


//Watch Task
//Watches js file changes
gulp.task('watch', function(){
	gulp.watch("client/**/*.js", ["scripts"])
});

gulp.task('startProduction', function(){
	  nodemon({
	    script: 'server/app.js',
	    ext:'js html'
	  })
});

gulp.task('startDevelop', function () {
  nodemon({
    script: 'server/app.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('default', ['scripts', 'styles', 'html', 'index', 'startProduction']);

gulp.task('develop',  ['scripts', 'styles', 'html', 'index','startDevelop', 'watch']);