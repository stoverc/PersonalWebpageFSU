$(document).ready(function(){
	$(".abstract").hide();
	$("span.abstract_link").click(function(event){
		$(this).siblings().toggle();
	});
});