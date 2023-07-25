<?php
/**
 * WooCommerce Compatibility File
 *
 * @link    https://woocommerce.com/
 *
 * @package _s
 */

if ( ! function_exists('is_shop')) {
    return false;
}


/**
 * Modify WooCommerce Wrap
 */
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);

/**
 * Remove default product link in loop
 */
remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5);


/**
 * Move breadcrumb bar
 */
remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);

/**
 * Within Product Loop - remove title hook and create a new one with the category displayed above it.
 */
remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);

/**
 * Remove Default Sidebar
 */
remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar', 10);


/**
 * Remove product meta after description
 */
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);


/**
 * Add custom wrap
 */
add_action('woocommerce_before_main_content', '_s_woocommerce_wrapper_before');
add_action('woocommerce_after_main_content', '_s_woocommerce_wrapper_after');


/**
 * Remove product headings in product tab
 */
add_filter('woocommerce_product_description_heading', '__return_false');
add_filter('woocommerce_product_additional_information_heading', '__return_false');

// Do not show page title
add_action('woocommerce_show_page_title', '__return_false');

/**
 * Add wrapper div to single product page
 */
add_action('woocommerce_before_single_product_summary', '_s_product_content_wrapper_start', 5);

add_action('woocommerce_single_product_summary', '_s_product_content_wrapper_end', 60);


/**
 * Add wrap class to product sort and account at top of products archive page
 */
add_action('woocommerce_before_shop_loop', '_s_sorting_wrapper', 9);
add_action('woocommerce_before_shop_loop', '_s_sorting_wrapper_close', 31);
// add_action('woocommerce_before_shop_loop', '_s_layout_switcher', 31);


/**
 * Mini cart drawer
 */
add_action('_s_before_site', '_s_header_cart_drawer', 5);


/**
 * Move notice position
 */
remove_action('woocommerce_before_single_product', 'woocommerce_output_all_notices', 10);
add_action('_s_before_product_hero', 'woocommerce_output_all_notices', 10);

add_action('kadence_after_header', function ()
{
    if (is_woocommerce()) {
        woocommerce_breadcrumb();
    }
}, 2);

add_action('woocommerce_single_product_summary', function ()
{
    if (is_active_sidebar('widget-area-product')) {
        echo '<div class="rs-widgets rs-widgets--product">';
        dynamic_sidebar('widget-area-product');
        echo '</div>';
    }
}, 35);


add_action('woocommerce_after_cart_totals', function ()
{
    if (is_active_sidebar('widget-area-cart')) {
        echo '<div class="rs-widgets rs-widgets--cart">';
        dynamic_sidebar('widget-area-cart');
        echo '</div>';
    }
}, 35);

add_action('woocommerce_review_order_after_submit', function ()
{
    if (is_active_sidebar('widget-area-checkout')) {
        echo '<div class="rs-widgets rs-widgets--checkout">';
        dynamic_sidebar('widget-area-checkout');
        echo '</div>';
    }
}, 35);

/**
 * Add 'woocommerce-active' class to the body tag.
 *
 * @param array $classes CSS classes applied to the body tag.
 *
 * @return array $classes modified to include 'woocommerce-active' class.
 */
function _s_woocommerce_active_body_class($classes)
{
    $classes[] = 'woocommerce-active';

    return $classes;
}


/**
 * Cart Link.
 *
 * Displayed a link to the cart including the number of items present and the cart total.
 *
 * @return void
 */
function _s_woocommerce_cart_link()
{
    ?>
    <a class="cart-contents" href="<?= esc_url(wc_get_cart_url()); ?>" title="<?php esc_attr_e('View your shopping cart', '_s'); ?>">
        <?php
        $item_count_text = sprintf(
        /* translators: number of items in the mini cart. */
            _n('%d', '%d', WC()->cart->get_cart_contents_count(), '_s'),
            WC()->cart->get_cart_contents_count()
        );
        ?>
        <span class="woocommerce-Price-amount amount"><?= wp_kses_data(WC()->cart->get_cart_subtotal()); ?></span>
        <span class="count"><?= esc_html($item_count_text); ?></span>
    </a>
    <?php
}


/**
 * Display Header Cart.
 *
 * @return void
 */
function _s_woocommerce_header_cart()
{
    $class = 'js-cart-click';
    if (is_cart() || is_checkout()) {
        $class = '';
    }
    ?>
    <ul id="site-header-cart" class="site-header-cart menu">
        <li>
            <div class="<?= $class; ?>">
                <?php _s_woocommerce_cart_link(); ?>
            </div>
        </li>
    </ul>
    <?php
}

add_action('_s_after_navigation', '_s_woocommerce_header_cart');


/**
 * Single Product Page - Add a section wrapper start.
 */
function _s_product_content_wrapper_start()
{
    echo '<div class="rswc-product-hero">';
    echo '<div class="container relative clearfix">';
    do_action('_s_before_product_hero');
}


/**
 * Single Product Page - Add a section wrapper end.
 */
function _s_product_content_wrapper_end()
{
    echo '</div></div><!--/rswc-product-hero end-->';
}


/**
 * Display Header Cart Drawer
 *
 * @return void
 * @since  1.0.0
 */
function _s_header_cart_drawer()
{
    if (function_exists('is_woocommerce')) {
        $class = is_cart() ? 'current-menu-item' : '';
        ?>
        <div class="rs-mini-cart-wrap <?= $class; ?>">

            <div id="ajax-loading">
                <div class="rs-loader">
                    <div class="spinner">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>
            </div>

            <div class="close-drawer"></div>

            <?php the_widget('WC_Widget_Cart', 'title='); ?>
        </div>
        <?php
        $drawer_js = "
				( function ( $ ) {

					// Open the drawer if a product is added to the cart
					$( '.product_type_simple.add_to_cart_button' ).on( 'click', function( e ) {
						e.preventDefault();
						$( 'body' ).toggleClass( 'drawer-open' );
					} );

					// Toggle cart drawer.
					$( '.js-cart-click' ).on( 'click', function( e ) {
						e.stopPropagation();
						e.preventDefault();
						$( 'body' ).toggleClass( 'drawer-open' );
					} );

					// Close the drawer when clicking outside it
					$( document ).mouseup( function( e ) {
						var container = $( '.rs-mini-cart-wrap' );

						if ( ! container.is( e.target ) && 0 === container.has( e.target ).length ) {
							$( 'body' ).removeClass( 'drawer-open' );
						}
					} );

					// Close drawer - click the x icon
					$( '.close-drawer' ).on( 'click', function() {
						$( 'body' ).removeClass( 'drawer-open' );
					} );

				}( jQuery ) );
				";

        wp_add_inline_script('_s-main', $drawer_js);
    }
}


/**
 * Sorting wrapper
 *
 * @return  void
 * @since   1.0.0
 */
function _s_sorting_wrapper()
{
    echo '<div class="rs-wc-sorting">';
}


/**
 * Sorting wrapper close
 *
 * @return  void
 * @since   1.0.0
 */
function _s_sorting_wrapper_close()
{
    // echo '<div class="rs-layout-switcher">';
    // echo '<span class="icon-bars1"></span><span class="icon-layout"></span>';
    // echo '</div>';

    echo '</div>';
}


/**
 * @return void
 */
function _s_layout_switcher()
{
    echo '<div class="rs-layout-switcher">';
    echo '<span class="icon-bars1"></span><span class="icon-layout"></span>';
    echo '</div>';
}


add_action('woocommerce_after_single_product_summary', function ()
{
    echo '<div class="container rswc-product-body">';
}, 4);


add_action('woocommerce_product_after_tabs', function ()
{
    echo '</div>';
}, 15);


add_action('woocommerce_after_single_product_summary', function ()
{
    echo '<div class="rs-product-metas">';
    woocommerce_template_single_meta();
    echo '</div>';
}, 11);


if (WenpriseContentComponents\Helpers::get_page_settings('_page_layouts') !== 'sidebar_none') {

    add_action('woocommerce_after_single_product_summary', function ()
    {
        echo '<div class="flex">';

        if (is_active_sidebar('sidebar-woo')) { ?>
            <div class="content__secondary woocommerce_sidebar">
                <?php dynamic_sidebar('sidebar-woo'); ?>
            </div>
        <?php }
    }, 5);


    add_action('woocommerce_product_after_tabs', function ()
    {
        echo '</div>';
    });

}

/**
 * Before Content.
 *
 * Wraps all WooCommerce content in wrappers which match the theme markup.
 *
 * @return void
 */
function _s_woocommerce_wrapper_before()
{
    ?>
    <div id="content" class="site__shop">

    <div id="primary" class="content__primary">
    <main id="main" class="site__main">
    <?php
}


/**
 * After Content.
 *
 * Closes the wrapping divs.
 *
 * @return void
 */
function _s_woocommerce_wrapper_after()
{
    ?>
    </main><!-- #main -->
    </div><!-- #primary -->

    <?php
    if (WenpriseContentComponents\Helpers::get_page_settings('_page_layouts') !== 'sidebar_none' && is_active_sidebar('sidebar-woo') && (is_shop() || is_product_category())) {
        if (get_theme_mod('rswc_products_catalog_sidebar_layout', 'sidebar-none') !== 'sidebar-none') {
            echo '<div class="content__secondary site-woo__sidebar">';
            dynamic_sidebar('sidebar-woo');
            echo '</div>';
        }
    }
    ?>

    </div><!-- #content -->
    <?php
}


add_action('woocommerce_before_account_navigation', function ()
{
    echo '<div class="woocommerce-MyAccount-navigation">';

    echo '<div class="wc-profile-card">';
    echo get_avatar(get_current_user_id(), 120);
    echo '<div class="wc-profile-card__name">' . wp_get_current_user()->display_name . '</div>';
    echo '</div>';
});


add_action('woocommerce_after_account_navigation', function ()
{
    echo '</div>';
});


add_filter('woocommerce_breadcrumb_defaults', function ($args)
{
    $args[ 'wrap_before' ] = '<div class="rswc-breadcrumb"><nav class="container woocommerce-breadcrumb">';
    $args[ 'wrap_after' ]  = '</nav></div>';

    return $args;
}, 10, 1);


add_action('woocommerce_before_shop_loop', function ()
{
    ?>
    <div class="inline-flex">
        <span class=""></span>
        <span class=""></span>
        <span class=""></span>
    </div>
    <?php
}, 25, 1);