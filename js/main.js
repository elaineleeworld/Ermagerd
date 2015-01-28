$(function(){

	// Function to translate text to Yoda speak
	$("#translate").click(function(){
		var words = $("#words").val();
		translateWords(words);
	});

	function translateWords(words) {

		var words_formatted = words.split(' ').join('+');

		var response = $.ajax({
			method: "GET",
			headers: { 
		        "Accept" : "text/plain",
		        "X-Mashape-Key": "xDxfbRfufVmshYHbDZTUkC68Qay1p1Zgiesjsnl5amUKdVzTB7"
		    },
			url: "https://yoda.p.mashape.com/yoda?sentence=" + words_formatted
		});

		response.done(function(data) {
			var yodaText = data.responseText;

			console.log(response)
			console.log("Yoda says " + response.responseText);

			$('#text').text(response.responseText);
		});

	};

	// // Function to take Yoda speak to voice
	// $("#speech").click(function() {

	// 	speakWords(words)
	// });

	// function speakWords(words){
	// 	var apikey = "615cd20fc69045659e7fd5f95d1181ab";
	// 	var baseURL = " ";
	// 	var query = form.input.value; //takes the value of the input and speaks it
		

	// 	$.ajax({
	// 		baseURL: "https://voicerss-text-to-speech.p.mashape.com/?key=615cd20fc69045659e7fd5f95d1181ab",
	// 		type: "POST",
	// 		data: {
	// 			apikey: "615cd20fc69045659e7fd5f95d1181ab"
	// 		},
	// 		headers: { 
	// 	        Header_One: "X-Mashape-Key", "KRmo08SNYdmshiGTnKPygOu4YU33p12L4U3jsnd2DSZcxMHaP5",
	// 	        Header_Two: "Content-Type", "application/x-www-form-urlencoded"
	// 	    },
	// 		dataType: 'json',
	// 		success: function (data) {
	// 			console.log(data);
	// 		}
	// 	});


	// };


});