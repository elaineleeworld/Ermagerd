$(function(){

	$("#show-text").click(function(){
		var words = $("#words").val();
		translateWords(words);
	});

	function translateWords(words){
		$.getJSON("", function(response){
			console.log(response);
			
			
		});
	};


});