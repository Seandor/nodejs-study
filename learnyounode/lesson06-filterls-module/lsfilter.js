var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
  var filtered = [];
  var ext_filter = '.' + ext;

  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }
    for (var i = 0; i < list.length; i++) {
      if (ext_filter === path.extname(list[i])) {
        filtered.push(list[i]);
      }
    }

    callback(null, filtered);
  });
};
