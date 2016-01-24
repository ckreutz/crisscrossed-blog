var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var glob = require("glob");
var minifyHTML = require('gulp-minify-html');
var replace = require('gulp-replace');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var fs = require('fs');
var imageResize = require('gulp-image-resize');
var parallel = require("concurrent-transform");
var os = require("os");
var awspublish = require('gulp-awspublish');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['compressjs', 'sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// minifyjs
gulp.task('compressjs', function() {
   gulp.src('js/found*.js')
     .pipe(uglify())
     .pipe(concat('foundation.js'))
     .pipe(gulp.dest('js/min'));
  });

// remove css
gulp.task('uncss', function () {
  return gulp.src('_sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(uncss({
      media: ['(max-width: 39.9375em) handheld and (orientation: landscape)', '(min-width: 40em)', '(min-width: 64em)'],
      ignore: [
        new RegExp('^meta\..*'),
        new RegExp('^\.is-.*'),
        /is-anchored/, /is-stuck/, /is-at-top/, /is-at-bottom/,
      ],
       // Wichtig: welche Seite werden einbezogen!
         html: ["_site/index.html", "_site/2015/**/*.html", "_site/archive/index.html"],
       // html: glob.sync("_site/2015/**/*.html")
    }))
    .pipe(nano())
    .pipe(gulp.dest('./_includes'));

});

// gulp.task('optimize-html', function() {
//   return gulp.src('_site/**/*.html')
//     .pipe(minifyHTML({
//         quotes: true
//     }))
//     .pipe(replace(/<link rel=\"stylesheet\" href=\"\/css\/style.css\"[^>]*>/, function(s) {
//         var style = fs.readFileSync('_site/css/style.css', 'utf8');
//         return '<style>\n' + style + '\n</style>';
//     }))
//     .pipe(gulp.dest('_site/'));
// });

gulp.task("resize-thumb", function () {
  gulp.src("images/pics/*.{jpg,png}")
    .pipe(parallel(
     imageResize({ width : 110, height: 110 }),
     os.cpus().length
   ))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest("images/pics/thumb"));
});

gulp.task("resize-medium", function () {
  gulp.src("images/pics/*.{jpg,png}")
    .pipe(parallel(
     imageResize({ width : 365, height: 230 }),
     os.cpus().length
   ))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest("images/pics/medium"));
});

// minifiy images
gulp.task('min-images', function () {
 return gulp.src('images/**/*')
     .pipe(imagemin({
         progressive: true,
         svgoPlugins: [{removeViewBox: false}],
         use: [pngquant()]
     }))
     .pipe(gulp.dest('images'));
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
   return gulp.src('_sass/style.scss')
      .pipe(sass({
         includePaths: ['sass'],
         onError: browserSync.notify
     }))
     .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true  }))
     .pipe(gulp.dest('_includes/'))
     .pipe(browserSync.reload({stream:true}));
});

gulp.task('publish', function() {
  var publisher = awspublish.create({
    params: {
      Bucket: 's3://www.crisscrossed.net'
    }
  });
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };
  return gulp.src('./public/*.js')
    .pipe(awspublish.gzip({ ext: '.gz' }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});

/**
 * Watch scss files for changes  & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('_sass/*.scss', ['sass']);
  gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_includes/*.css', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);


gulp.task('images', ['resize-thumb', 'resize-medium', 'min-images']);
