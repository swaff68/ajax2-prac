var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
// you have to set these next three items up so that you can push your itemns to the db

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bios');
var SubmittedBios = require('./Models/bios.js')
var app = express();



app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);

// 5. create the other part of the hanlder "'/bioResponse" to receive it from the client "index.js" your console.logs should now work.

app.post('/bioResponse', function(req, res){
	console.log(req)
	console.log(req.body.fName, req.body.lName)
// 6. To save it to the db, create a var, in this case its "var submittedBios" and push the fName and lName items to the db
	var submittedBios = new SubmittedBios({
	fName: req.body.fName,
	lName: req.body.lName,

	});
	
	submittedBios.save();
	res.send(submittedBios)
})

var server = app.listen(9612, function() {
	console.log('Express server listening on port ' + server.address().port);
});
