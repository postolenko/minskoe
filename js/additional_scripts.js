$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {


	var mainSlider = $(".main-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,   
        autoplay: true,
        autoplaySpeed: 10000,
        appendDots: $(".pagination-append .row"),
        speed: 1200,
        slidesToShow: 1,
        fade: true
    });

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity
		});

	});

});

