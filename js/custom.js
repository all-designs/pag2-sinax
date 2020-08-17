$(function () {


	$(".slider_active").slick({
		arrows: true,
		nextArrow: ".right_btn",
		prevArrow: ".left_btn",

	});
	$(".toggle_bars").click(function () {
		$(".navbar-nav").toggleClass("navbar_active");
	});

	$('.counter').counterUp({
		delay: 1000,
		time: 1000000
	});



	var mixer = mixitup(".mix_wrap")
	$('.gal_item').venobox({
		share: ['facebook', 'twitter', 'download'],
		spinner: 'three-bounce'
	});



});
