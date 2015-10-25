$(document).ready(function() {
	$('div.menubox > a').click(function(e) {
		//Prevent a page reload when a link is pressed
		e.preventDefault();
		//Call the scroll function
		goToByScroll($(this).attr("href"));
	});
});

function goToByScroll(id){
	//Scroll
	$("html,body").animate({ scrollTop: $('#' + id).offset().top - 160}, 'slow');
};