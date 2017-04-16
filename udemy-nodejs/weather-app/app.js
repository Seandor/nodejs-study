const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Adress to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address).then((results) => {
	console.log(results.Address);
	return weather.getWeather(results.Latitude, results.Longitude);
}).then((weatherResults) => {
	console.log(`It's currently ${weatherResults.temperature}℃. It feels like ${weatherResults.apparentTemperature}℃.`);
}).catch((errorMessage) => {
	console.log(errorMessage);
});
