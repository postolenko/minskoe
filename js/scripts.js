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
        var whiteTrTempl = "<div class='wt-tr'></div>";

        $(".main-nav .menu-item").each(function() {

            if( $(this).find(".dropdown-menu").length > 0 && $(this).find(".dropdown-btn").length == 0 ) {

                $(this).prepend(dropdownBtnTempl);
                $(this).prepend(whiteTrTempl);

            }

        });

        // $(".menu-item .dropdown-btn").click(function() {

        //     parentBlock = $(this).closest(".menu-item");

        //     dropdownMenu = parentBlock.find(".dropdown-menu");

        //     if( dropdownMenu.is(":hidden") ) {

        //         dropdownMenu.fadeIn(200);

        //         parentBlock.addClass("active");

        //     } else {

        //         dropdownMenu.fadeOut(200);

        //         parentBlock.removeClass("active");

        //     }

        // });

        // $(this).keydown(function(eventObject){

        //     if (eventObject.which == 27) {

        //         $(".dropdown-menu").each(function() {

        //             if( $(this).is(":visible") ) {

        //                 $(this).fadeOut(200);

        //                 parentBlock = $(this).closest(".menu-item");

        //                 parentBlock.removeClass("active");

        //             }

        //         });
        //     }

        // });

        // $(document).mouseup(function (e){

        //     hide_element = $(".dropdown-menu");

        //     if (!hide_element.is(e.target)

        //         && hide_element.has(e.target).length === 0) {

        //             hide_element.fadeOut(300);

        //             parentBlock = hide_element.closest(".menu-item");

        //             parentBlock.removeClass("active");
        //     }

        // });

    });

    $(function() {

        var tabsName;
        var activeTabName;
        // var prevTabHeight;
        // var activeTabHeight;
        var activeFlag = false;

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

                // prevTabHeight = $(this).height();

            } else {

                $(this).css({
                        "display" : "none"
                    });
            }

        });

        // $(".tabs-content[data-tabs = '"+tabsName+"']").css({
        //     "height" : prevTabHeight + "px"
        // });


        $(".tabs_1-nav .tab-link").click(function(e) {

            e.preventDefault();

            if( !$(this).hasClass("active") ) {

                parentBlock = $(this).closest(".tabs-nav");

                var parentItem = $(this).closest("li");

                parentItem.find(".slidedown_wrapp").slideDown(200);

                parentBlock.find(".tab-link").each(function() {

                    if( $(this).hasClass("active")) {

                        $(this).removeClass("active");

                    }

                });

                $(this).addClass("active");

                parentBlock.find(".slidedown_wrapp").each( function(){

                    var tabLink = $(this).closest("li").find(".tab-link");

                    if( !tabLink.hasClass("active") && $(this).is(":visible") ) {

                        $(this).slideUp(200);

                    }

                });

                var tabsName = $(this).closest(".tabs_1-nav ").attr("data-tabs-nav");

                var activeTabName = $(this).attr("data-tab-link");

                // $(".tabs-content[data-tabs = '"+tabsName+"']").find(".tab").each(function() {

                //     if( $(this).is(":visible") ) {

                //         prevTabHeight = $(this).height();

                //     }

                // });

                $(".tabs-content[data-tabs = '"+tabsName+"']").find(".tab").each(function() {

                    if( $(this).attr("data-tab") == activeTabName ) {

                        // $(this).fadeIn(200);

                        $(this).css({
                            "display" : "block"
                        });

                        // var activeTabHeight = $(this).height();

                        // $(this).closest(".tabs-content").delay(150).animate({
                        //     "height" : activeTabHeight + "px"
                        // }, 300);

                    } else {

                        // $(this).fadeOut(200);

                        $(this).css({
                            "display" : "none"
                        });

                    }

                });

            }

        });

    });

    $(function() {

        var activeTabName;

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

                var parentBlock = $(this).closest(".tabs_2");

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

        var slidingBox;

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