$(window).load(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if(bodyWidth  <= 768) {

        $(".scroll").mCustomScrollbar();
        // $(".scroll_y").mCustomScrollbar({
        //     axis:"y"
        // });

    } else {

        $(".scroll").mCustomScrollbar("destroy");
        // $(".scroll_y").mCustomScrollbar("destroy");

    }

});

$(window).resize(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if(bodyWidth  <= 768) {

        $(".scroll").mCustomScrollbar();
        // $(".scroll_y").mCustomScrollbar({
        //     axis:"y"
        // });

    } else {

        $(".scroll").mCustomScrollbar("destroy");
        // $(".scroll_y").mCustomScrollbar("destroy");

    }

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
        slidesToShow: 6,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 350,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $(".tabs_container").each(function() {

        $(this).easytabs();

    });    

});

