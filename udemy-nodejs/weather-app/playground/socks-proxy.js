var request = require('request');
var url = require('url');
var socks5HttpAgent = require('socks5-http-client/lib/Agent');
var socks5HttpsAgent = require('socks5-https-client/lib/Agent');

var urlString = process.argv[2];

var url = url.parse(urlString);
var agentClass = (url.protocol === 'https:') ? socks5HttpsAgent : socks5HttpAgent;
var agentOptions = {
  socksHost: 'localhost', // defaults to localhost
  socksPort: 1080         // defaults to 1080
};
var options = {
  uri: url,
  agentClass: agentClass,
  agentOptions: agentOptions,
  method: 'GET'
};
request(options, function(err, res, body) {
  if (err) console.log(err.message);
  else {
    console.log(res.statusCode);
    console.log(body);
  }
});