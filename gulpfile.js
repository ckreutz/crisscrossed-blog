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
gulp.task('browser-sync', ['compressjs', 'uncss', 'optimize-html', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// minifyjs
gulp.task('compressjs', function() {
   gulp.src('js/*.js')
     .pipe(uglify())
     .pipe(concat('plugin.js'))
     .pipe(gulp.dest('js/min'));
  });

gulp.task('uncss', function () {
    return gulp.src('_sass/**/*.scss')
         .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(concat('style.css'))
        .pipe(uncss({
          media: ['(max-width: 39.9375em) handheld and (orientation: landscape)', '(min-width: 40em)', '(min-width: 64em)'],
          ignore: [
            new RegExp('^meta\..*'),
            new RegExp('^\.is-.*')
          ],
           // Wichtig: welche Seite werden einbezogen!
             html: ["_site/index.html", "_site/2015/**/*.html"],
           // html: glob.sync("_site/2015/**/*.html")
        }))
        .pipe(nano())
        .pipe(gulp.dest('./css'));
});

gulp.task('optimize-html', function() {
  return gulp.src('_site/**/*.html')
      .pipe(minifyHTML({
          quotes: true
      }))
      .pipe(replace(/<link rel=\"stylesheet\" href=\"\/css\/style.css\"[^>]*>/, function(s) {
          var style = fs.readFileSync('_site/css/style.css', 'utf8');
          return '<style>\n' + style + '\n</style>';
      }))
      .pipe(gulp.dest('_site/'));
});

// // minifiy images
// gulp.task('images', function () {
//  return gulp.src('images/*')
//      .pipe(imagemin({
//          progressive: true,
//          svgoPlugins: [{removeViewBox: false}],
//          use: [pngquant()]
//      }))
//      .pipe(gulp.dest('images'));
// });

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
   return gulp.src('_sass/style.scss')
      .pipe(sass({
         includePaths: ['scss'],
         onError: browserSync.notify
     }))
     .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true  }))
     .pipe(gulp.dest('_site/css'))
     .pipe(browserSync.reload({stream:true}))
     .pipe(gulp.dest('css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_scss/*.scss', ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
