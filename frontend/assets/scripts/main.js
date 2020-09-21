(function($) {

    'use strict';

    var header = document.getElementById('masthead');
    var body = document.getElementsByTagName('body')[0];

    var _s = _s || {};

    _s.init = function() {
        this.ajaxLoading();
        this.smartMenu();
        this.closeCartDrawer();
        this.navTree();
    };

    /**
     * Ajax loading style
     */
    _s.ajaxLoading = function() {
        var $loading = $('#ajax-loading').hide();

        $(document).ajaxStart(function() {
            $loading.show();
        }).ajaxStop(function() {
            $loading.hide();
        });
    };

    /**
     * Smart dropdown menu
     */
    _s.smartMenu = function() {
        //@see https://www.smartmenus.org/docs/
        $('.sm, .product-categories').smartmenus({
            showFunction: function($ul, complete) {
                $ul.slideDown(100, complete);
            },
            hideFunction: function($ul, complete) {
                $ul.slideUp(100, complete);
            },
            showTimeout : 0,
            hideTimeout : 0,
        });
    };

    /**
     * Header sticky
     */
    _s.navSticky = function() {
        var sticky = header.offsetTop + 100;

        if (window.pageYOffset > sticky) {
            header.classList.add('is-sticky');
            body.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
            body.classList.remove('is-sticky');
        }
    };


    /**
     * Close cart drawer
     */
    _s.closeCartDrawer = function() {
        $('.close-drawer').on('click', function() {
            $('body').removeClass('mobile-toggled').removeClass('drawer-open');
        });
    };

    /**
     * Nav accordion
     */
    _s.navTree = function() {
        var $navTreeEl = $('.widget_nav_menu, .widget_product_categories111, .widget-nav_menu');
        if ($navTreeEl.length > 0) {
            $navTreeEl.each(function() {

                var element = $(this),
                    elementSpeed = element.attr('data-speed'),
                    elementEasing = element.attr('data-easing'),
                    currentChild = element.find(
                        'ul li.current_page_parent .children, ul > li.current_page_item .children, ul > li.current-menu-item .children,  ul > li.current-menu-parent .children, ul > li.current-cat-parent .children, ul > li.current-cat.cat-parent .children'),
                    currentSubmenu = element.find(
                        'ul li.current_page_parent .sub-menu, ul > li.current_page_item .sub-menu, ul > li.current-menu-item .sub-menu, ul > li.current-menu-parent .sub-menu, ul > li.current-cat-parent .sub-menu, ul > li.current-cat.cat-parent .sub-menu');

                // 动画速度
                if (!elementSpeed) {
                    elementSpeed = 250;
                }

                // 动画效果
                if (!elementEasing) {
                    elementEasing = 'swing';
                }

                // 添加 sub-menu 类，添加箭头
                element.find('ul li:has(ul)').addClass('sub-menu');
                element.find('ul li:has(ul) > a').
                        append('<span class="icon"><i class="wpion-angle-down"></i></span>');

                // 打开当前菜单的父级
                element.find(
                    'ul li.current_page_ancestor, ul li.current_page_parent, ul > li.current_page_item, ul > li.current-menu-parent, ul > li.current-cat-parent').
                        addClass('active');

                currentChild.slideDown(Number(elementSpeed), elementEasing);
                currentSubmenu.slideDown(Number(elementSpeed), elementEasing);

                element.find('ul > li.current-menu-item').parent().parent().slideDown(Number(elementSpeed), elementEasing);
                element.find('ul > li.current-menu-item').parent().parent('li').addClass('active');
                element.find('ul > li.current-cat').parent().parent('li').addClass('active');

                // 鼠标划过还是点击显示子菜单
                if (element.hasClass('on-hover')) {
                    element.find('ul li:has(ul):not(.active)').hover(function() {
                        $(this).children('ul').stop(true, true).slideDown(Number(elementSpeed), elementEasing);
                    }, function() {
                        $(this).children('ul').delay(250).slideUp(Number(elementSpeed), elementEasing);
                    });
                } else {
                    // 如果需要父级菜单不能点击，把点击元素设置为 a
                    element.find('ul li:has(ul) > a .icon').click(function(e) {
                        var childElement = $(this).parent();
                        element.find('ul li').not(childElement.parents()).removeClass('active');
                        childElement.parent().children('ul').slideToggle(Number(elementSpeed), elementEasing, function() {
                            $(this).find('ul').hide();
                            $(this).find('li.active').removeClass('active');
                        });
                        element.find('ul li > ul').
                                not(childElement.parent().children('ul')).
                                not(childElement.parents('ul')).
                                slideUp(Number(elementSpeed), elementEasing);
                        childElement.parent('li:has(ul)').toggleClass('active');
                        e.preventDefault();
                    });
                }
            });
        }
    };

    $(document).ready(function() {
        _s.init();
    });

    window.onscroll = function() {
        _s.navSticky();
    };

})(jQuery);
