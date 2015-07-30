var regexes     = require('./regexes').sass
  , through2    = require('through2')
  , gutil       = require('gulp-util')
  , PluginError = gutil.PluginError
  ;

// no options - yet...
module.exports = function() {
  // Execute replacements
  return through2.obj(function(file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new PluginError('gulp-sass-to-less', 'Streaming not supported'));
    }

    var str = file.contents.toString()
      , cont = replace(str, regexes)
    ;
    file.contents = new Buffer(cont);
    file.path = gutil.replaceExtension(file.path, '.less');
    cb(null, file);
  });

};
function replace(string, replacements) {
  replacements.forEach(function(regex){
    string = string.replace(regex.pattern, regex.replacement);
  });
  return string;
}
