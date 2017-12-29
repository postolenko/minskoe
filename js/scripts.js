$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    $(".h2").each(function() {

        var shapeH = $(this).find(".shape");

        var hTitle = $(this).find("h2");

        shapeH.css({
            "width" : ( $(this).width() - hTitle.outerWidth() ) / 2 + "px"
        });

    });

});

$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    var parentBlock;
    var dropdownBtn;
    var dropdownMenu;
   
    $(window).resize(function() {

        getTitleParams();

    });

    $(function() {

        var dropdownBtnTempl = "<button type='button' class='dropdown-btn'></button>";

        $(".main-nav .menu-item").each(function() {

            if( $(this).find(".dropdown-menu").length > 0 && $(this).find(".dropdown-btn").length == 0 ) {

                $(this).prepend(dropdownBtnTempl);

            }

        });

        $(".menu-item .dropdown-btn").click(function() {

            parentBlock = $(this).closest(".menu-item");

            dropdownMenu = parentBlock.find(".dropdown-menu");

            if( dropdownMenu.is(":hidden") ) {

                dropdownMenu.fadeIn(200);

                parentBlock.addClass("active");

            } else {

                dropdownMenu.fadeOut(200);

                parentBlock.removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $(".dropdown-menu").each(function() {

                    if( $(this).is(":visible") ) {

                        $(this).fadeOut(200);

                        parentBlock = $(this).closest(".menu-item");

                        parentBlock.removeClass("active");

                    }

                });
            }

        });

        $(document).mouseup(function (e){

            hide_element = $(".dropdown-menu");

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                    hide_element.fadeOut(300);

                    parentBlock = hide_element.closest(".menu-item");

                    parentBlock.removeClass("active");
            }

        });

    });

    function getTitleParams() {

        $(".h2").each(function() {

            var shapeH = $(this).find(".shape");

            var hTitle = $(this).find("h2");

            shapeH.css({
                "width" : ( $(this).width() - hTitle.outerWidth() ) / 2 + "px"
            });

        });

    }

});