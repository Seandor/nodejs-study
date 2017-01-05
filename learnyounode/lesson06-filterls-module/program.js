var lsfilter = require('./lsfilter');

lsfilter(process.argv[2], process.argv[3], function (err, list) {
  if (err) {
    return console.error('There is an error', err);
  }
  list.forEach(function (file) {
    console.log(file);
  });
});
