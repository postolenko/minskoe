$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {


	$(".main-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,   
        autoplay: true,
        autoplaySpeed: 10000,
        appendDots: $(".pagination-append .row"),
        speed: 1200,
        slidesToShow: 1,
        fade: true
    });

    $(".slider-2").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        // appendDots: $(".pagination-append .row"),
        speed: 1200,
        slidesToShow: 1,
        fade: true
    });

    $(".slider-3").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 6
    });

	// $("select").each(function() {

	// 	$(this).select2({
	// 		minimumResultsForSearch: Infinity
	// 	});

	// });

});

