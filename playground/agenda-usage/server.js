const Agenda = require('agenda');
const mongoConnectionString = 'mongodb://127.0.0.1:27017/agenda';

var agenda = new Agenda({db: {address: mongoConnectionString}});

// or override the default collection name:
// var agenda = new Agenda({db: {address: mongoConnectionString, collection: 'jobCollectionName'}});

// or pass additional connection options:
// var agenda = new Agenda({db: {address: mongoConnectionString, collection: 'jobCollectionName', options: {ssl: true}}});

// or pass in an existing mongodb-native MongoClient instance
// var agenda = new Agenda({mongo: myMongoClient});

agenda.define('say Hello', function(job, done) {
  console.log('Hello');
  done();
});

agenda.on('ready', function() {
  agenda.every('3 minutes', 'say Hello');

  // Alternatively, you could also do:
//   agenda.every('*/3 * * * *', 'delete old users');

  agenda.start();
});
