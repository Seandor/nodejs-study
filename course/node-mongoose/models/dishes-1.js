
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dishSchema = new Schema(
{
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	}
}, 	
{
	timestamps: true
});

// create a model using the schema
// it will create a collection in mongodb
// with the plural form of the name 'Dish'
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;