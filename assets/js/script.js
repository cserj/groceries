/*

My Custom JS
============



*/

// $(function(){
	
// 	$('#alertMe').click(function(e){
// 		e.preventDefault();

// 		$('#successAlert').slideDown();
// 	});

// 	$('a.pop').click(function(e){
// 		e.preventDefault();
// 	});

// 	$('a.pop').popover();

// 	$('[rel="tooltip"]').tooltip();
// });

$(window).scroll(function () {
  if ( $(this).scrollTop() > 200 && !$('header').hasClass('open') ) {
    $('header').addClass('open');
    $('header').slideDown();
   } else if ( $(this).scrollTop() <= 200 ) {
    $('header').removeClass('open');
    $('header').slideUp();
  }
});
$(document).ready(function () {

    // you want to enable the pointer events only on click;

    $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#canvas1').on('click', function () {
        $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
    });

    // you want to disable pointer events when the mouse leave the canvas area;

    $("#map_canvas1").mouseleave(function () {
        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
});