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


/**
 * Set default options after active theme
 */
add_action('after_switch_theme', function ()
{
    // Disable Avatar
    update_option('show_avatars', 0);

    // Disable register
    update_option('users_can_register', 0);

    // Set blog description to empty
    update_option('blogdescription', '');

    // Set permalink structure to postname
    update_option('permalink_structure', '/%postname%/');
    flush_rewrite_rules();

    // For dev site, we prevent search engine to index
    update_option('blog_public', 0);

    // Set popular datetime format in China
    update_option('date_format', 'Y-m-d');
    update_option('time_format', 'H:i');

    // Remove default sample comment.
    wp_delete_comment(1, true);
});


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

// Remove rsd link
remove_action('wp_head', 'rsd_link');

// remove WordPress shortlink
remove_action('wp_head', 'wp_shortlink_wp_head', 10);

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


/**
 * Remove WordPress links in menubar
 */
add_action('wp_before_admin_bar_render', function ()
{
    global $wp_admin_bar;

    $wp_admin_bar->remove_menu('wp-logo');
    $wp_admin_bar->remove_menu('about');
    $wp_admin_bar->remove_menu('wporg');
    $wp_admin_bar->remove_menu('documentation');
    $wp_admin_bar->remove_menu('support-forums');
    $wp_admin_bar->remove_menu('feedback');
    $wp_admin_bar->remove_menu('view-site');
});


/**
 * Remove dashboard metabox
 */
add_action('wp_before_admin_bar_render', function ()
{
    global $wp_meta_boxes;

    unset($wp_meta_boxes[ 'dashboard' ][ 'side' ][ 'core' ][ 'dashboard_recent_drafts' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'side' ][ 'core' ][ 'dashboard_primary' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'side' ][ 'core' ][ 'dashboard_secondary' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'normal' ][ 'core' ][ 'dashboard_duoshuo' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'normal' ][ 'core' ][ 'dashboard_site_health' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'normal' ][ 'core' ][ 'e-dashboard-overview' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'normal' ][ 'core' ][ 'dashboard_recent_comments' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'normal' ][ 'core' ][ 'dashboard_incoming_links' ]);
    unset($wp_meta_boxes[ 'dashboard' ][ 'normal' ][ 'core' ][ 'dashboard_plugins' ]);
});