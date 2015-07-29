/* Puppygram .... something or another.
- navbar
- more puppies
- proper font
- gridded puppies
- color scheme */

$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 20;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
	});