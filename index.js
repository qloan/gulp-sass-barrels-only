const through2  = require('through2');
const nodeSass  = require('node-sass');
const R         = require('ramda');
const gutil     = require('gulp-util');

let gulpSass = function(options) {
  return through2.obj((file, enc, cb) => {
    var fileHistory = file.history[0];
    var filename = R.last(fileHistory.split('/'));
    if (filename.indexOf('_') === 0) {
        return cb();    //skip scss partials ie: _partials.scss
    }
    nodeSass.render({
        file: fileHistory,
        options: options
    }, (err, results) => {

        if(err || !results) {
            console.log('[ERROR: failed while sassing ' + filename+ ']');
            console.dir(err);

            return cb(err);
        } else {
            file.contents = results.css;
            file.path = gutil.replaceExtension(fileHistory, '.css');

            cb(null, file);
        }
    });
  });
}

module.exports = gulpSass;
