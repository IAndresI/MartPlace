"use strict";

let gulp = require("gulp"),
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  browserSync = require("browser-sync"),
  autoPrefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cssmin = require("gulp-cssmin"),
  babel = require("gulp-babel"),
  webpack = require("webpack-stream");

// ANOTHER

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });
});

gulp.task("watch", function () {
  gulp.watch("app/scss/*.scss", gulp.parallel("sass"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  gulp.watch("app/js/main.js", gulp.parallel("script"));
});

// STYLE

gulp.task("sass", function () {
  return gulp
    .src("app/scss/style.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(autoPrefixer({
      overrideBrowserslist: ["last 8 versions"]
    }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("libscss", function () {
  return gulp
    .src(["node_modules/normalize.css/normalize.css"])
    .pipe(concat("libs.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest("./app/css"));
});

//HTML

gulp.task("html", function () {
  return gulp.src("app/*.html").pipe(browserSync.reload({
    stream: true
  }));
});

// JAVASCRIPT

gulp.task("js", function () {
  return gulp.src("app/js/*.js").pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task("script", function () {
  return gulp
    .src(["app/js/main.js"])
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "index.js",
        },
      })
    )
    .pipe(concat("main.min.js"))
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./app/js"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// gulp.task("libsjs", function () {
//   return gulp
//     .src(["node_modules/rateyo/lib/cjs/rateyo.js"])
//     .pipe(concat("libs.min.js"))
//     .pipe(uglify())
//     .pipe(gulp.dest("app/js"));
// });

//DEFAULT

gulp.task(
  "default",
  gulp.parallel("browser-sync", "libscss", "sass", "script", "watch")
);