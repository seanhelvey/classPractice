$(document).ready(function() {

	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#ptoggler").click(function(){
		$(".dissapear").toggle();
	});
   var q;
   for(q=1; q<4; q++) {
		console.log("q", q);
		$("#q"+ q).click(function(){
			console.log("q", q);
			$("#a"+ q).slideToggle("slow");
		});
	 }
});
