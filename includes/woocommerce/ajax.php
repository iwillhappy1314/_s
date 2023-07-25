<?php

/**
 * Ajax add product to cart backend
 */
add_action('wp_ajax_wprs_wc_ajax_add_to_cart', '_s_ajax_add_to_cart');
add_action('wp_ajax_nopriv_wprs_wc_ajax_add_to_cart', '_s_ajax_add_to_cart');
add_filter('woocommerce_add_to_cart_fragments', '_s_woocommerce_cart_link_fragment');

/**
 * PDP/Single product ajax add to cart.
 */
function _s_ajax_add_to_cart()
{
    $is_quick_buy = _s_data_get($_POST, 'rswc_quick_buy', false);

    ob_start();
    wc_print_notices();
    $notices = ob_get_clean();

    ob_start();
    woocommerce_mini_cart();
    $_s_mini_cart = ob_get_clean();

    if ($is_quick_buy) {
        $data = [
            'success'      => true,
            'redirect_url' => wc_get_checkout_url(),
        ];
    } else {
        $data = [
            'notices'   => $notices,
            'fragments' => apply_filters(
                'woocommerce_add_to_cart_fragments',
                [
                    'div.widget_shopping_cart_content' => '<div class="widget_shopping_cart_content">' . $_s_mini_cart . '</div>',
                ]
            ),
            'cart_hash' => apply_filters('woocommerce_add_to_cart_hash', WC()->cart->get_cart_for_session() ? md5(json_encode(WC()->cart->get_cart_for_session())) : '', WC()->cart->get_cart_for_session()),
        ];
    }

    wp_send_json($data);
}


/**
 * Cart Fragments.
 *
 * Ensure cart contents update when products are added to the cart via AJAX.
 *
 * @param array $fragments Fragments to refresh via AJAX.
 *
 * @return array Fragments to refresh via AJAX.
 */
function _s_woocommerce_cart_link_fragment($fragments)
{
    ob_start();
    _s_woocommerce_cart_link();
    $fragments[ 'a.cart-contents' ] = ob_get_clean();

    return $fragments;
}