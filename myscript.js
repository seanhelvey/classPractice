$(document).ready(function() {

	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#ptoggler").click(function(){
		$(".dissapear").toggle();
	});
   var q;
   for(q=1; q<4; q++)

	$("#q"+ q).click(function(){
    $("#a"+ q).slideToggle("slow");
  });
});
