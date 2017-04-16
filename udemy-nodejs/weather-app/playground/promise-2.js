const request = require('request');
const socks5HttpAgent = require('socks5-http-client/lib/Agent');
const socks5HttpsAgent = require('socks5-https-client/lib/Agent');
const _url = require('url');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    var urlString = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
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
        reject(`Can not connect to google server${error}`);
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
      } else if (body.status === 'OK') {
        resolve({
          Address: body.results[0].formatted_address,
          Latitude: body.results[0].geometry.location.lat,
          Longitude: body.results[0].geometry.location.lng
        })
      }
    });
  });
};

geocodeAddress('00000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});