$(document).ready(function() {
	$('nav a').click(function(e) {
		//Prevent a page reload when a link is pressed
		e.preventDefault();
		//Call the scroll function
		goToByScroll($(this).attr("href"));
	});
});

function goToByScroll(id){
	//Scroll
	$("html,body").animate({ scrollTop: $(id).offset().top - 50 }, 'slow');
};