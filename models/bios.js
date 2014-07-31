// 4. Create your data model that mongoose wil push to mongo

var mongoose = require('mongoose')

var SubmittedBios = mongoose.model('SubmittedBios', {
	
	fName: String,
	lName: String

});



module.exports = SubmittedBios