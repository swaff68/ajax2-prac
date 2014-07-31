$(function(){
// 1. "when" i click the submit button
	$('#bioForm').on('submit', function(e){
		e.preventDefault();
		// 2. "what" Take the value in the field and that value is now the variable "fName" & "lName"  
		var fName = $('[name=firstName]').val()
		var lName = $('[name=lastName]').val()

		console.log(fName, lName)
		
		// 3. Send the values to the server, so create a handler function called "/bioResponse", create a key/value pair for each form item

		$.post('/bioResponse', {fName:fName, lName:lName}, function(submittedBios){

		// 7. this next line will send the user submitted data back to the index.js page, you have to set up a placeholder on the index.jade file for where the data will go, that is where the #userName comes from.
			$('#userName').text(submittedBios.fName +' '+ submittedBios.lName)
		})
	})
})