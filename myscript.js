$(document).ready(function() {

	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#ptoggler").click(function(){
		$(".dissapear").toggle();
	});
	$("#q1, #q2, #q3").click(function(event){
		//slideToggle next sibling after element clicked
		$(event.target).next().slideToggle("slow");
	});
});
