
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Dishes = require('../models/dishes');
var Verify = require('./verify');

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')

.get(Verify.verifyOrdinaryUser, function (req, res, next) {
	Dishes.find({}, function(err, dish) {
		if (err) throw err;
		// convert that js object into a json string
		// and send back to the client
		// headers will be automaticlly set
		res.json(dish);
	});
})

.post(Verify.verifyOrdinaryUser, function (req, res, next) {
	Dishes.create(req.body, function(err, dish) {
		if (err) throw err;

		console.log('Dish created!');
		var id = dish._id;
		res.writeHead(200, {'Content-Type': 'text/plain'});

		res.end('Added the dish with id: ' + id);
	});
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
	Dishes.remove({}, function(err, resp) {
		if (err) throw err;
		res.json(resp);
	});
});


dishRouter.route('/:dishId')

.get(function (req, res, next) {
	Dishes.findById(req.params.dishId, function(err, dish) {
		if (err) throw err;

		res.json(dish);
	});
})

.put(function(req, res, next){
    Dishes.findByIdAndUpdate(req.params.dishId, {
    	$set: req.body
    }, {
    	new: true
    }, function(err, dish) {
    	if (err) throw err;
    	res.json(dish);
    });
})

.delete(function (req, res, next) {
	Dishes.findByIdAndRemove(req.params.dishId, function(err, resp) {
		if (err) throw err;
		res.json(resp);
	});
});

dishRouter.route('/:dishId/comments')

.get(function(req, res, next) {

	Dishes.findById(req.params.dishId, function(err, dish) {
		if (err) throw err;
		res.json(dish.comments);
	});
})

.post(function(req, res, next) {

	Dishes.findById(req.params.dishId, function(err, dish) {
		if (err) throw err;

		dish.comments.push(req.body);

		dish.save(function(err, dish) {
			if (err) throw err;
			console.log('Updated Comments!');
			res.json(dish);
		});
	});
})

.delete(function(req, res, next) {

	Dishes.findById(req.params.dishId, function(err, dish) {
		if (err) throw err;

		for (var idx = (dish.comments.length - 1); idx >= 0; idx--) {
			dish.comments.id(dish.comments[idx]._id).remove();
		}
		dish.save(function(err, result) {
			if (err) throw err;

			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Deleted all comments');
		});
	});
});

dishRouter.route('/:dishId/comments/:commentId')

.get(function(req, res, next) {

	Dish.findById(req.params.dishId, function(err, dish) {
		if (err) throw err;
		res.json(dish.comments.id(req.params.commentId));
	});
})

.put(function(req, res, next) {
	// delete the existing comment and insert the updated
	// comment as a new comment
	Dishes.findById(req.params.dishId, function(err, dish) {
		if (err) throw err;

		dish.comments.id(req.params.commentId).remove();

		dish.comments.push(req.body);

		dish.save(function(err, dish) {
			if (err) throw err;
			console.log('Updated comments!');
			res.json(dish);
		});
	});
})

.delete(function(req, res, next) {
	Dishes.findById(req.params.dishId, function(err, dish) {
		dish.comments.id(req.params.commentId).remove();

		dish.save(function(err, resp) {
			if (err) throw err;
			res.json(resp);
		});
	});
});

module.exports = dishRouter;
