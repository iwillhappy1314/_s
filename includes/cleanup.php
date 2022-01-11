<?php
/**
 * Clean Up useless assets for end user.
 *
 * @package _s
 */

/**
 * Remove styles
 */
add_action('wp_print_styles', function ()
{
    wp_deregister_style('dashicons');
    wp_deregister_style('wp-block-library');
});

/**
 * Remove Scripts
 */
add_action('wp_enqueue_scripts', function ()
{
    wp_deregister_script('wp-embed');
}, PHP_INT_MAX);

// Remove wordpress generator info
remove_action('wp_head', 'wp_generator');

// Remove link for windows live writer
remove_action('wp_head', 'wlwmanifest_link');

// Remove Rest API Link
remove_action('wp_head', 'rest_output_link_wp_head', 10);

// Remove oembed link
remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);

// Remove dns prefetch
remove_action('wp_head', 'wp_resource_hints', 2);

// Remove Feed Link
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'feed_links', 2);

remove_action('wp_head', 'rsd_link');

// Remove emoji script and styles
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Remove Google fonts for elementor
add_filter('elementor/frontend/print_google_fonts', '__return_false');

// Remove Icon font for Elementor
add_action('elementor/frontend/after_register_styles', function ()
{
    foreach (['solid', 'regular', 'brands'] as $style) {
        wp_deregister_style('elementor-icons-fa-' . $style);
    }
}, 20);


// Disable xmlrpc
add_filter('xmlrpc_enabled', '__return_false');