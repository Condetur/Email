var express = require('express');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');

var app = express();

var auth = {
		auth: {
		api_key: 'key-688349a7b07c0c83d18b17bdab645bf3',
		domain: 'sandboxe25134fe320b4739b5f7500d6f2c5932.mailgun.org'
	}
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.set('port', (process.env.PORT || 8000));

app.post('/email', function(req, res) {
	name = req.body.name;
	email = req.body.email;
	body = req.body.body;

	nodemailerMailgun.sendMail({
		from: 'message@condetur.com',
		to: 'tino.caer@me.com', // An array if you have multiple recipients.
		subject: 'New message from client: ' + name,
		text: 'Email: ' + email + '\n' + body,
	}, function (err, info) {
		if (err) {
			console.log('Error: ' + err);
		} else {
		}
	});
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function(err) {
});