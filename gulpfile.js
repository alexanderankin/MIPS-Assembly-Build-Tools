/**
 * Version 0.0.1
 * Release Date: Wed Sep 30 00:47:49 EDT 2015
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var name = require('./package.json')['name'];

var sources = ['src/macros/*.asm', 'src/main.asmh', 'src/functions/*.asm', 'src/main.asm', 'src/parts/*.asm', 'src/data/*.asm'];

gulp.task('build', function() {
	return gulp.src(sources)
	.pipe(concat(name, {newLine: '\n\n'}))
	.pipe(rename({extname: '.asm'}))
	.pipe(gulp.dest('build'));
});

gulp.task('dist', function() {
	return gulp.src(sources)
	.pipe(concat(name, {newLine: '\n\n'}))
	.pipe(rename({extname: '.asm'}))
	.pipe(gulp.dest('dist'));	
});

gulp.task('run', ['build'], shell.task([
	'/resources/mars.jar build/' + name + '.asm'
]));

gulp.task('watch', function () {
	gulp.watch('src/**/*.asm', ['run']);
	gulp.watch('src/**/*.asmh', ['run']);
});
