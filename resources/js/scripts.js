
$(document).ready(function() {
	$(window).scroll(function() {

		if($(window).scrollTop() > 200) {
			$('nav').removeClass('nav a');
			$('nav').addClass('sticky-nav');
		}

		else {
			$('nav').removeClass('sticky-nav');
		}

	}
	);

	$('.js-nav-icon').click(function(){
		var nav = $('.js-main-nav');

		var icon_class = $('.js-nav-icon i');


		nav.slideToggle(300);

/*

		if (icon_class.hasClass('fas fa-bars')
		{
			icon_class.addClass('fas fa-times');
			icon_class.removeClass('fas fa-bars');
		}

		else
		{
			icon_class.addClass('fas fa-bars');
			icon_class.removeClass('fas fa-times');
		}
*/


	});




}  
);
