/* Puppygram .... something or another.
- top-bar
- more puppies
- proper font
- gridded puppies
- color scheme */

var offset = -10; // some offset value for which when the header becomes hidden
jQuery(window).scroll(function() { //also an option: jQuery .on('scroll') method
  if(jQuery('#fixed_bar').is(':visible') && jQuery(window).scrollTop() < offset) {
    jQuery('#fixed_bar').fadeOut(20);
  } else if(!jQuery('#fixed_bar').is(':visible') && jQuery(window).scrollTop() > offset) {
    jQuery('#fixed_bar').fadeIn(20);
  }    
});