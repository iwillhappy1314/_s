(function($) {

    'use strict';

    const body = $('body');
    const _s_wc = {};

    _s_wc.init = function() {
        this.ajax_add_to_cart();
        this.sticky_cart();
    };

    /**
     * Ajax add to cart
     */
    _s_wc.ajax_add_to_cart = function() {
        body.on('submit', 'form.cart', function(e) {
            const $product_element = $(this).parents('.type-product');

            if ($product_element.hasClass('product-type-external') ||
                $product_element.hasClass('product-type-grouped')) {
                return;
            }

            e.preventDefault();

            let $add_to_cart_button = $(this).find('.single_add_to_cart_button'),
                data = $(this).serialize();

            data += '&action=wprs_wc_ajax_add_to_cart';

            if ($add_to_cart_button.val()) {
                data += '&add-to-cart=' + $add_to_cart_button.val();
            }

            $add_to_cart_button.removeClass('added not-added');
            $add_to_cart_button.addClass('loading');

            $(document.body).trigger('adding_to_cart', [$add_to_cart_button, data]);

            $.ajax({
                url     : _s_ajax_obj.ajaxurl,
                data    : data,
                method  : 'POST',
                success : function(resp) {
                    if (!resp) {
                        return;
                    }

                    if (resp.error && resp.product_url) {
                        window.location = resp.product_url;
                        return;
                    }

                    $add_to_cart_button.removeClass('loading');

                    const fragments = resp.fragments;

                    if (fragments) {
                        $.each(fragments, function(key) {
                            $(key).addClass('updating');
                        });

                        $.each(fragments, function(key, value) {
                            $(key).replaceWith(value);
                        });
                    }

                    if (0 < resp.notices.indexOf('error')) {
                        $('body').append(resp.notices);
                        $add_to_cart_button.addClass('not-added');
                    } else {
                        $add_to_cart_button.addClass('added');
                    }
                },
                error   : function() {
                    console.log('error occurred when add product to cart.');
                },
                complete: function() {

                },
            });

            return false;
        });

        body.on('adding_to_cart', function(event, fragments, cart_hash) {
            $('body').toggleClass('drawer-open');
        });
    };

    /**
     * sticky cart in product page
     */
    _s_wc.sticky_cart = function() {
        $('.single-product form.cart').attr('id', 'sticky-scroll');

        // Smooth scroll for sticky single products - for variable, bundle, composite and grouped items
        $('a.variable-grouped-sticky[href*="#"]').on('click', function(e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 80,
            }, 500, 'linear');
        });
    };

    $(document).ready(function() {
        _s_wc.init();
    });

})(jQuery);
