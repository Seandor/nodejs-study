
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// add currency type to mongoose schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create the sub schema
var commentSchema = new Schema(
{	
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});


// create dish schema
var dishSchema = new Schema(
{
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String
	},
	category: {
		type: String
	},
	label: {
		type: String,
		default: ""
	},
	price: {
		type: Currency
	},
	description: {
		type: String,
		required: true
	},
	comments: [commentSchema]
}, 	
{
	timestamps: true
});

// create a model using the schema
// it will create a collection in mongodb
// with the plural form of the name 'Dish'
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;