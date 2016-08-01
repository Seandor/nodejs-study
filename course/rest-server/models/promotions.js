
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// add currency type to mongoose schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = new Schema(
{
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
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
	}
}, {
	timestamps: true
});

var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;