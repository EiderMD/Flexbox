var trago = require( ' trago ' );
var browserSync = require( ' browser-sync ' ).create();
var recargar = browserSync.recargar;

gulp.tarea( ' servir ' , función () {
  browserSync.init({
    servidor : {
       baseDir : " ./ "
    }
  });

  gulp.watch( " *.html " ).on( " cambiar " , recargar);
});