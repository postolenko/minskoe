$(window).load(function() {

    var parentBlock;
    var shapeH;
    var hTitle;

    $("select").each(function() {

        parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    $(".h2").each(function() {

        shapeH = $(this).find(".shape");

        hTitle = $(this).find("h2");

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

    // ------

    var tabsName;
    var activeTabName;
    var activeFlag = false;

    // ------

    var parentItem;
    var tabLink;
    var tabsName;
    var activeTabName;

    // ------

    var activeTabName;

    // ------

    var slidingBox;

    // ------

    var tabsNav;

    // ------

    getRespParams();
   
    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getTitleParams();

        getRespParams();

    });

    $(document).scroll(function() {

        getRespParams();

    });

    $(function() {

        var dropdownBtnTempl = "<button type='button' class='dropdown-btn'></button>";
        var whiteTrTempl = "<div class='wt-tr'></div>";

        $(".main-nav .menu-item").each(function() {

            if( $(this).find(".dropdown-menu").length > 0 && $(this).find(".dropdown-btn").length == 0 ) {

                $(this).prepend(dropdownBtnTempl);
                $(this).prepend(whiteTrTempl);

            }

        });

    });

    $(function() {

        // var tabsName;
        // var activeTabName;
        // var activeFlag = false;

        $(".tabs_1-nav").each( function() {

            tabsName = $(this).attr("data-tabs-nav");

            $(this).find(".tab-link").each(function() {

                if( $(this).hasClass("active") ) {

                    activeFlag = true;

                    return true;

                } else {

                    activeFlag = false;

                }

            });

            if( activeFlag == false ) {

                $(this).find(".tab-link").eq(0).addClass("active");

            }

            $(this).find(".tab-link").each(function() {

                if( $(this).hasClass("active") ) {

                    activeTabName = $(this).attr("data-tab-link");

                } else {

                    $(this).closest("li").find(".slidedown_wrapp").css({
                        "display" : "none"
                    });

                }

            });

        });

        $(".tabs-content[data-tabs = '"+tabsName+"']").find(".tab").each(function() {

            if( $(this).attr("data-tab") == activeTabName ) {

                $(this).css({
                        "display" : "block"
                    });

            } else {

                $(this).css({
                        "display" : "none"
                    });
            }

        });

        $(".tabs_1-nav .tab-link").click(function(e) {

            e.preventDefault();

            if( !$(this).hasClass("active") ) {

                parentBlock = $(this).closest(".tabs-nav");

                parentItem = $(this).closest("li");

                parentItem.find(".slidedown_wrapp").slideDown(200);

                parentBlock.find(".tab-link").each(function() {

                    if( $(this).hasClass("active")) {

                        $(this).removeClass("active");

                    }

                });

                $(this).addClass("active");

                parentBlock.find(".slidedown_wrapp").each( function(){

                    tabLink = $(this).closest("li").find(".tab-link");

                    if( !tabLink.hasClass("active") && $(this).is(":visible") ) {

                        $(this).slideUp(200);

                    }

                });

                tabsName = $(this).closest(".tabs_1-nav ").attr("data-tabs-nav");

                activeTabName = $(this).attr("data-tab-link");

                $(".tabs-content[data-tabs = '"+tabsName+"']").find(".tab").each(function() {

                    if( $(this).attr("data-tab") == activeTabName ) {

                        $(this).css({
                            "display" : "block"
                        });

                    } else {

                        $(this).css({
                            "display" : "none"
                        });

                    }

                });

            }

        });

    });

    $(function() {

        // var activeTabName;

        $(".tabs_2").each(function() {

            $(this).find(".tab_2-pill").each(function() {

                if( $(this).hasClass("active")  ) {

                    activeTabName = $(this).attr("for");

                    activeFlag = true;

                    return false;

                } else {

                    activeFlag = false;

                }

            });

            if( activeFlag == false ) {

                activeTabName = $(this).find(".tab_2-pill").eq(0).attr("for");

                $(this).find(".tab_2-pill").eq(0).addClass("active");

            }

            $(this).find(".tabradio").each(function() {

                if( $(this).attr("id") == activeTabName ) {

                    $(this).click();

                    return false;

                }

            });

        });

        $(".tab_2-pill").click(function() {

            if( !$(this).hasClass("active") ) {

                parentBlock = $(this).closest(".tabs_2");

                activeTabName = $(this).attr("for");

                $(this).addClass("active");

                parentBlock.find(".tab_2-pill").each(function() {

                    if( $(this).attr("for") != activeTabName ) {

                        $(this).removeClass("active");

                    }

                });

                parentBlock.find(".tabradio").each(function() {

                    if( $(this).attr("id") == activeTabName ) {

                        $(this).click();

                        return false;

                    }

                });

            }

        });

    });

    $(function() {

        // var slidingBox;

        $(".sliding-block_wrapp").each(function() {

            slidingBox = $(this).find(".sliding-box");

            if( $(this).hasClass("active") ) {

                slidingBox.css({
                    "display" : "block"
                });

            } else {

                slidingBox.css({
                    "display" : "none"
                });

            }

        });

        $(".sliding-block-header").click(function() {

            parentBlock = $(this).closest(".sliding-block_wrapp");

            slidingBox = parentBlock.find(".sliding-box");

            if( slidingBox.is(":hidden") ) {

                slidingBox.slideDown(300);
                parentBlock.addClass("active");

            } else {

                slidingBox.slideUp(300);
                parentBlock.removeClass("active");

            }

        });

    });

    $(function() {

        $(".phone").mask("+9 ( 999 ) 999 - 99 - 99");

    });

    $(function() {

        if( $(".main_slider").length > 0 ) {

            $("#header_site").removeClass("light");

        } else {

            $("#header_site").addClass("light");

        }

    });

    $(function() {

        $(".dropdown-btn").click(function() {

            if( bodyWidth <= 768 ) {

                parentBlock = $(this).closest(".menu-item");

                var dropdownMenu = parentBlock.find(".dropdown-menu");

                if( dropdownMenu.is(":hidden") ) {

                    dropdownMenu.slideDown(300);

                    $(this).addClass("active");

                } else {

                    dropdownMenu.slideUp(300);

                    $(this).removeClass("active");

                }

            }

        });

    });

    $(function() {

        $(".respmenubtn").click(function() {

            parentBlock = $("#header_site");

            if( $(".main-nav").is(":hidden") ) {

                $(".main-nav").fadeIn(300);

                $(this).addClass("active");

                if( bodyWidth <= 768 &&
                    $(".main_slider").length > 0 &&
                    $(".main_slider").offset().top == 0 &&
                    $(".header-site").offset().top == 0 ) {

                    parentBlock.addClass("light");

                }

                $(".main-nav").css({
                    "height" : $(window).height() - $(".header-site").height() + "px",
                    "margin-top" : $(".header-site").height() + "px"
                });

            } else {

                $(".main-nav").fadeOut(300);

                $(this).removeClass("active");

                if( bodyWidth <= 768 &&
                    $(".main_slider").length > 0 &&
                    $(".main_slider").offset().top == 0 &&
                    $(".header-site").offset().top == 0 ) {

                    parentBlock.removeClass("light");

                }

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $('.main-nav').fadeOut(300);

                $(".respmenubtn").removeClass("active");

            }

        });

    });

    $(function() {

        $(".tab-nav_btn").click(function() {

            parentBlock = $(this).closest(".direction-tabs");

            tabsNav = parentBlock.find(".tabs-nav_wrapp");

            if( tabsNav.hasClass("active") ) {

                tabsNav.removeClass("active");

            } else {

                tabsNav.addClass("active");

            }

        });

    });

    function getTitleParams() {

        var shapeH;
        var hTitle;

        $(".h2").each(function() {

            shapeH = $(this).find(".shape");

            hTitle = $(this).find("h2");

            shapeH.css({
                "width" : ( $(this).width() - hTitle.outerWidth() ) / 2 + "px"
            });

        });

    }

    function getRespParams() {

        if( bodyWidth <= 768 && $(".main_slider").length > 0 ) {

            if( $(".header-site").offset().top > $(".main_slider").offset().top ) {

                $("#header_site").addClass("light");

            } else if($(".main-nav").is(":hidden")) {

                $("#header_site").removeClass("light");

            }

        } else {

            if( bodyWidth <= 768 ) {

                $(".wrapper").css({
                    "padding-top" : $(".header-site").height()+ "px"
                }); 

            } else if($(".main-nav").is(":hidden")){

                $(".wrapper").css({
                    "padding-top" : 0
                }); 

            }

        }

        if( bodyWidth <= 768 ) {

            $(".main_slider .slide").css({
                "padding-top" : $(".header-site").height() + "px"
            });

            $(".main-nav").css({
                "height" : $(window).height() - $(".header-site").height() + "px",
                "margin-top" : $(".header-site").height() + "px"
            });

        } else {

            $(".main_slider .slide").css({
                "padding-top" : 0
            });

            $(".main-nav").css({
                "height" : "auto",
                "margin-top" : 0
            });

            $(".dropdown-menu").attr('style', "");

            $(".dropdown-btn").removeClass("active");

            if( $(".main_slider").length > 0 ) {
                $("#header_site").removeClass("light");
            }

            $(".wrapper").css({
                "padding-top" : 0
            });

        }

    }

});