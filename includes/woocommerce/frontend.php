<?php

/**
 * Enqueue the script used in WooCommerce
 */
add_action('wp_enqueue_scripts', '_s_woocommerce_scripts');

/**
 * Remove Select2 CSS
 */
// add_action('wp_print_styles', '_s_deregister_select2', 5);


/**
 * Disable the default WooCommerce stylesheet.
 *
 * Removing the default WooCommerce stylesheet and enqueing your own will
 * protect you during WooCommerce core updates.
 *
 * @link https://docs.woocommerce.com/document/disable-the-default-stylesheet/
 */
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

if ( ! function_exists('_s_woocommerce_scripts')) {
    /**
     * WooCommerce specific scripts & stylesheets.
     *
     * @return void
     */
    function _s_woocommerce_scripts()
    {
        wp_enqueue_style('_s-woocommerce-main', _s_assets('dist/styles/woocommerce.css'));

        if (is_product() || is_shop() || is_product_category() || is_product_tag()) {
            wp_enqueue_style('_s-woocommerce-products', _s_assets('dist/styles/products.css'));
        }

        if (is_singular('product')) {
            wp_enqueue_style('_s-woocommerce-review', _s_assets('dist/styles/review.css'));
        }

        if (is_cart()) {
            wp_enqueue_style('_s-woocommerce-cart', _s_assets('dist/styles/cart.css'));
        }

        if (is_checkout()) {
            wp_enqueue_style('_s-woocommerce-checkout', _s_assets('dist/styles/checkout.css'));
        }

        if (is_account_page() || is_order_received_page()) {
            wp_enqueue_style('_s-woocommerce-account', _s_assets('dist/styles/account.css'));
        }

        if (is_product()) {
            wp_enqueue_script('_s-wc-product', _s_assets('dist/scripts/woocommerce.js'), ['jquery']);
            wp_localize_script('_s-wc-product', '_s_ajax_obj',
                [
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'nonce'   => wp_create_nonce('ajax-nonce'),
                ]
            );
        }

        $font_path   = WC()->plugin_url() . '/assets/fonts/';
        $inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

        wp_add_inline_style('_s-woocommerce-main', $inline_font);
    }
}


/**
 * Add WooCommerce active body class
 */
add_filter('body_class', '_s_woocommerce_active_body_class');