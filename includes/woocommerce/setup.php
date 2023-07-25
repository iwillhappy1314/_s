<?php

/**
 * Add widgets area used in woocommerce page
 */
add_action('widgets_init', '_s_woocommerce_widgets_init');
/**
 * WooCommerce theme support setup
 */
add_action('after_setup_theme', '_s_woocommerce_setup');


if ( ! function_exists('_s_woocommerce_setup')) {
    /**
     * WooCommerce setup function.
     *
     * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
     * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)-in-3.0.0
     *
     * @return void
     */
    function _s_woocommerce_setup()
    {
        add_theme_support('woocommerce');
        add_theme_support('wc-product-gallery-zoom');
        add_theme_support('wc-product-gallery-lightbox');
        add_theme_support('wc-product-gallery-slider');
    }
}


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
if ( ! function_exists('_s_woocommerce_widgets_init')) {
    function _s_woocommerce_widgets_init()
    {
        register_sidebar([
            'name'          => esc_html__('WooCommerce Widget Area', '_s'),
            'id'            => 'sidebar-woo',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);

        register_sidebar([
            'name'          => esc_html__('Single Product Custom area', '_s'),
            'id'            => 'widget-area-product',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="rswc-widget rswc-%2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);

        register_sidebar([
            'name'          => esc_html__('Cart Widgets Area', '_s'),
            'id'            => 'widget-area-cart',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="rswc-widget rswc-%2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);

        register_sidebar([
            'name'          => esc_html__('Checkout Widgets Area', '_s'),
            'id'            => 'widget-area-checkout',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="rswc-widget rswc-%2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);

    }
}