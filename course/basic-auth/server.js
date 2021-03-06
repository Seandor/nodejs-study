// browser based cookies used to do the authentication
// once you shutdown the browser, you need to be authenticated 
// again.


var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

var hostname = 'localhost';
var port = 1993;

var app = express();

app.use(morgan('dev'));
app.use(cookieParser('12345-67890-09876-54321'));	// use of signed cookie

// it is a authentication middleware
function auth(req, res, next) {
	console.log(req.headers);

	if (!req.signedCookies.user) {
		var authHeader = req.headers.authorization;
		if (!authHeader) {
			var err = new Error('You are not authenticated!');
			err.status = 401;
			// automatically raised the error and do ..
			next(err);
			return;
		}
		var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
		var user = auth[0];
		var pass = auth[1];
		if (user === 'admin' && pass === 'password') {
			// if it's authorized user, set the cookie
			res.cookie('user', 'admin', {signed: true});	// name, value, additional
			next();
		} else {
			var err = new Error('You are not authenticated!');
			err.status = 401;
			next(err);
		}
	} else {
		if (req.signedCookies.user === 'admin') {
			console.log(req.signedCookies);
			next();
		} else {
			var err = new Error('You are not authenticated!');
			err.status = 401;
			next(err);
		}
	}
}

// app.use sequence matters
app.use(auth);

app.use(express.static(__dirname + '/public'));

// catch the authentication error
app.use(function(err, req, res, next) {
	res.writeHead(err.status || 500, {
		'WWW-Authenticate': 'Basic',
		'Content-Type': 'text/plain'
	});
	res.end(err.message);
});

app.listen(port, hostname, function () {
	console.log(`Server running at http://${hostname}:${port}`);
});