$(document).ready(function() {

	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#ptoggler").click(function(){
		$(".dissapear").toggle();
	});
	$("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
