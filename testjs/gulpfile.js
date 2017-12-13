var gulp = require("gulp");
//var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var minify = require("gulp-clean-css");
var scriptStackDir = "src/core/";
var scripts = [
    scriptStackDir + "xajax.init.js",
    scriptStackDir + "xajax.config.js",
    //"src/core/xajax.event.js"
    scriptStackDir + "xajax_core_old.js"
];
gulp.task("scripts", function () {
    return gulp.src(scripts).pipe(concat("xajax_core.js")).pipe(gulp.dest("dist/js")).pipe(rename("xajax_core.min.js")).pipe(uglify()).pipe(gulp.dest("dist/js"));
});
gulp.task("watch", function () {
    gulp.watch(scripts, ["scripts"]);
    //gulp.watch(['src/_scss/*.scss', 'src/_scss/components/*.scss', 'src/_scss/mixins/*.scss'], ['sass', 'combine']);
});
gulp.task("default", ["scripts", "watch"]);