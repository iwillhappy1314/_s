(function($) {

    'use strict';

    const _s_wc = {};

    _s_wc.init = function() {
        this.ajax_add_to_cart();
        this.sticky_cart();
        this.quick_shop();
    };

    /**
     * Ajax add to cart
     */
    _s_wc.ajax_add_to_cart = function() {
        const body = $('body');
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

            $.ajax({
                url    : _s_ajax_obj.ajaxurl,
                data   : data,
                method : 'POST',
                success: function(response) {

                    if (response.redirect_url) {
                        window.location = response.redirect_url;
                    } else {
                        $(document.body).trigger('adding_to_cart', [$add_to_cart_button, data]);
                        $add_to_cart_button.removeClass('loading');

                        const fragments = response.fragments;

                        // 更新购物车
                        if (fragments) {
                            $.each(fragments, function(key) {
                                $(key).addClass('updating');
                            });

                            $.each(fragments, function(key, value) {
                                $(key).replaceWith(value);
                            });
                        }

                        // show notice
                        if (0 < response.notices.indexOf('error')) {
                            $('body').append(response.notices);
                            $add_to_cart_button.addClass('not-added');
                        } else {
                            $add_to_cart_button.addClass('added');
                        }
                    }

                },
            });

            return false;
        });

        body.on('adding_to_cart', function(event, fragments, cart_hash) {
            body.toggleClass('drawer-open');
        });
    };

    /*
     * Product Buy Now Button click
     */
    _s_wc.quick_shop = function() {
        $('body').on('click', '.rswc_quick_buy_button', function() {
            //if (kapee_options.product_add_to_cart_ajax) {
            //$('.single_add_to_cart_button').addClass('quick-buy-proceed');
            //}

            const $this = $(this),
                product_id = $(this).attr('data-product-id'),
                product_type = $(this).attr('data-product-type'),
                selected = $('form.cart input#rswc_quick_buy_product_' + product_id),
                product_form = selected.parents('form.cart'),
                submit_btn = product_form.find('[type="submit"]'),
                is_disabled = submit_btn.is(':disabled');

            if (is_disabled) {
                $('html, body').animate({
                    scrollTop: submit_btn.offset().top - 200,
                }, 900);
            } else {
                if (!$this.hasClass('disable')) {
                    product_form.append('<input type="hidden" value="true" name="rswc_quick_buy" />');
                }

                document.getElementsByClassName('single_add_to_cart_button')[0].click();
            }
        });

        $('form.cart').change(function() {
            const is_submit_disabled = $(this).find('[type="submit"]').is(':disabled');
            if (is_submit_disabled) {
                $('.rswc_quick_buy_button').attr('disabled', 'disable');
            } else {
                $('.rswc_quick_buy_button').removeAttr('disabled');
            }
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
