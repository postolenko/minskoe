$(window).load(function() {

    var parentBlock;
    var shapeH;
    var hTitle;

    // --------

    var activeTabName;
    var activeTabHeight;

    // --------

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

    $(".tabs_nav").each(function() {

        var tabsName = $(this).attr("data-tabs-nav");

        $(this).children("li").each(function() {

            var tabLink = $(this).find(".tab_link");

            if( tabLink.hasClass("active") ) {

                activeFlag = true;

                return true;

            } else {

                activeFlag = false;

            }

        });

        if( activeFlag == false ) {

            var tabLinkItem = $(this).children("li").eq(0);

            tabLinkItem.find(".tab_link").addClass("active");

        }

        $(this).children("li").each(function() {

            var tabLink = $(this).find(".tab_link");

            if( tabLink.hasClass("active") ) {

                activeTabName = tabLink.attr("data-tab-link");

            } else if(tabLink.closest("li").children(".slidedown_wrapp").length > 0){

                tabLink.closest("li").children(".slidedown_wrapp").css({
                    "display" : "none"
                });

            }

        });

        $(".tabs_content[data-tabs = '"+tabsName+"']").children(".tab").each(function() {

            if( $(this).attr("data-tab") != activeTabName ) {

                $(this).css({
                    "display" : "none"
                });
            }

        });

        $(".tabs_content[data-tabs = '"+tabsName+"']").children(".tab[data-tab = '" + activeTabName + "']").css({
            "display" : "block"
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
    var activeTabHeight;

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

    //     // var tabsName;
    //     // var activeTabName;
    //     // var activeFlag = false;
    //     // var activeTabHeight;

            
        $(".tab_link").click(function(e) {

            e.preventDefault();

            if( !$(this).hasClass("active")) {

                parentBlock = $(this).closest(".tabs_nav");

                parentItem = $(this).closest("li");

                tabsName = parentBlock.attr("data-tabs-nav");

                activeTabName = $(this).attr("data-tab-link");

                parentBlock.children("li").each(function() {

                    if( $(this) != parentItem ) {

                        $(this).find(".tab_link").removeClass("active");

                        if( $(this).find(".slidedown_wrapp").length > 0 ) {

                            $(this).find(".slidedown_wrapp").slideUp(300);

                        }

                    }

                });

                $(this).addClass("active");

                if( parentItem.find(".slidedown_wrapp").length > 0 ) {

                    parentItem.find(".slidedown_wrapp").slideDown(300);

                }

                activeTabHeight = $(".tabs_content[data-tabs = '"+tabsName+"']").height();

                $(".tabs_content[data-tabs = '"+tabsName+"']").css({
                    "height" : activeTabHeight + "px"
                });

                $(".tabs_content").filter("[data-tabs = '"+ tabsName +"']").children(".tab").each(function() {

                    $(this).css({
                        "display" : "none"
                    });

                });                

                $(".tabs_content").filter("[data-tabs = '"+ tabsName +"']").children(".tab").each(function() {

                    var tabAttr = $(this).attr("data-tab");

                    if( tabAttr == activeTabName ) {

                        $(this).fadeIn(300);

                        activeTabHeight = $(this).outerHeight();

                        $(".tabs_content").filter("[data-tabs = '"+ tabsName +"']").animate({
                            "height" : activeTabHeight + "px"
                        }, 300);

                        return true;

                    }

                });

                setTimeout(function() {

                    $(".tabs_content").filter("[data-tabs = '"+ tabsName +"']").css({
                        "height" : "auto"
                    });

                }, 500);

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

            if( bodyWidth <= 900 ) {

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

                if( bodyWidth <= 900 &&
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

                if( bodyWidth <= 900 &&
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

        if( bodyWidth <= 900 && $(".main_slider").length > 0 ) {

            if( $(".header-site").offset().top > $(".main_slider").offset().top ) {

                $("#header_site").addClass("light");

            } else if($(".main-nav").is(":hidden")) {

                $("#header_site").removeClass("light");

            }

        } else {

            if( bodyWidth <= 900 ) {

                $(".wrapper").css({
                    "padding-top" : $(".header-site").height()+ "px"
                }); 

            } else if($(".main-nav").is(":hidden")){

                $(".wrapper").css({
                    "padding-top" : 0
                }); 

            }

        }

        if( bodyWidth <= 900 ) {

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