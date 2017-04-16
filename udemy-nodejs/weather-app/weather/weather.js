const request = require('request');
const socks5HttpAgent = require('socks5-http-client/lib/Agent');
const socks5HttpsAgent = require('socks5-https-client/lib/Agent');
const _url = require('url');

// transform FAHRENHEIT to CELSIUS 
var transformTemperature = (fahrenheit) => {
  var celsius = (fahrenheit - 32) / 1.8;
  return celsius.toFixed(2);
}

var getWeather = (lat, lng) => {
  return new Promise((resolve, reject) => {
    var urlString = `https://api.forecast.io/forecast/a504192ee3463dee820d46ed6c003fe5/${lat},${lng}`;
    var url = _url.parse(urlString);

    var agentClass = (url.protocol === 'https:') ? socks5HttpsAgent : socks5HttpAgent;
    var agentOptions = {
      socksHost: 'localhost', // defaults to localhost
      socksPort: 1080         // defaults to 1080
    };

    var options = {
      uri: url,
      json: true,
      agentClass: agentClass,
      agentOptions: agentOptions,
      method: 'GET'
    }

    request(options, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Forecast.io server.');
      } else if (response.statusCode === 400) {
        reject('Unable to fetch weather.');
      } else if (response.statusCode === 200) {
        resolve({
          temperature: transformTemperature(body.currently.temperature),
          apparentTemperature: transformTemperature(body.currently.apparentTemperature)
        });
      }
    });
  });
};

module.exports = {
  getWeather
};