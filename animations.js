console.log("Connected");

$("#tweet-controls").hide();

$(".tweet-compose").click(function(){
	$("#tweet-controls").show();
	$(this).css("height", "5em");
});

$("ul").hide();
$(".reply").hide();

$(".content").hover(function(){
	$("ul", this).slideDown("fast");
}, function(){
	$("ul").slideUp("fast");
});

var maxChar = $("#char-count").html();

$(".tweet-compose").keypress(function(){
	var charLength = maxChar - $(this).val().length - 1;
	$("#char-count").html(charLength);
	if(charLength <= 10){
		$("#char-count").css("color", "red");
	}
	if(charLength == 0){
		$("#tweet-submit").attr("disabled", "true");
	}
});

$(".tweet-compose").keyup(function(e){
	if(e.keyCode == 8){
		var charLength = maxChar - $(this).val().length;
		$("#char-count").html(charLength);
	}
	if(charLength > 10){
		$("#char-count").css("color", "#999");
	}
	if(charLength > 0){
		$("#tweet-submit").removeAttr("disabled", "false");
	}
});

$("#tweet-submit").click(function(){
	if($("#tweet-content textarea").first().val() !== ""){
		var layout = $("#stream div").first().html();
		var layout2 = $("<div></div>").html(layout);
		$("#stream").prepend(layout2);
		$("#stream div").first().addClass("tweet");
		$("#stream img").first().attr("src", "img/alagoon.jpg");
		$("#stream p").first().html($("#tweet-content textarea").first().val());
		$("#stream strong").first().html($("#profile-summary p").first().html());
		$("#tweet-content textarea").first().val("");
		$(".tweet-compose").css("height", "2.5em");
		$("#char-count").html(maxChar);
	}
	
});












