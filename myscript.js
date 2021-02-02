$(document).ready(function() {

	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#ptoggler").click(function(){
		$(".dissapear").toggle();
	});
   var q;
   for(q=1; q<4; q++)

	$(".flip"+ q).click(function(){
    $(".panel").slideToggle("slow");
  });
});
