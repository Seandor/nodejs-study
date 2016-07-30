
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var dbopera = require('./operations');

var url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to the server");

	dbopera.insertDocument(db, { name: "Vadonut", 
		description: "Test"}, "dishes", function(result) {
			console.log(result.ops);
			dbopera.findDocument(db, "dishes", function(docs) {
				console.log(docs);
				dbopera.updateDocument(db, { name: "Vadonut"}, 
					{ description: "Updated Test"}, "dishes", function(result) {
						console.log(result.result);
						dbopera.findDocument(db, "dishes", function(docs) {
							console.log(docs);
							db.dropCollection("dishes", function(result) {
								console.log(result);
								db.close();
							});
						});
					});
			});
		});
});