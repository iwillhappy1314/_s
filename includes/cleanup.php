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
    if ( ! is_user_logged_in()) {
        wp_deregister_style('dashicons');
    }

    // wp_deregister_style('wp-block-library');
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
    if (get_bloginfo('description') === '又一个WordPress站点') {
        update_option('blogdescription', '');
    }

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

    // Set WooCommerce page template to app template
    if (class_exists('WooCommerce')) {
        $page_ids = [
            get_option('woocommerce_cart_page_id'),
            get_option('woocommerce_checkout_page_id'),
            get_option('woocommerce_myaccount_page_id'),
        ];

        foreach ($page_ids as $page_id) {
            update_post_meta($page_id, '_wp_page_template', 'template-app.php');
        }
    }
});

// Disable widget block editor
// add_filter('use_widgets_block_editor', '__return_false');

// Remove WordPress generator info
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

$cleaner = new Wenprise\Cleaner();

//Remove top level menu
$cleaner->remove_menu([
    'uploader.php',
]);

$cleaner->remove_submenu('index.php', 10)
        ->remove_submenu('woocommerce', 'report')
        ->remove_submenu('elementor', 'go_elementor_pro')
        ->remove_submenu('elementor', 'go_knowledge_base_site')
        ->remove_submenu('elementor', 'elementor-getting-started');

//Remove post metabox
$cleaner->remove_meta_box('e-dashboard-overview', 'dashboard', 'normal')
        ->remove_meta_box('dashboard_primary', 'dashboard', 'normal')
        ->remove_meta_box('dashboard_right_now', 'dashboard', 'normal')
        ->remove_meta_box('dashboard_activity', 'dashboard', 'normal')
        ->remove_meta_box('revisionsdiv', 'post', 'normal')
        ->remove_meta_box('revisionsdiv', 'page', 'normal')
        ->remove_meta_box('commentstatusdiv', 'post', 'normal')
        ->remove_meta_box('commentstatusdiv', 'page', 'normal')
        ->remove_meta_box('commentstatusdiv', 'product', 'normal')
        ->remove_meta_box('commentsdiv', 'page', 'normal')
        ->remove_meta_box('trackbacksdiv', 'post', 'normal')
        ->remove_meta_box('postcustom', 'post', 'normal')
        ->remove_meta_box('postcustom', 'page', 'normal')
        ->remove_meta_box('slugdiv', 'post', 'normal')
        ->remove_meta_box('slugdiv', 'page', 'normal')
        ->remove_meta_box('authordiv', 'post', 'normal')
        ->remove_meta_box('postexcerpt', 'post', 'normal')
        ->remove_meta_box('authordiv', 'page', 'normal')
        ->remove_meta_box('postexcerpt', 'page', 'normal')
        ->remove_meta_box('postimagediv', 'post', 'normal')
        ->remove_meta_box('postimagediv', 'page', 'normal')
        ->remove_meta_box('postimagediv', 'career', 'normal')
        ->remove_meta_box('postimagediv', 'download', 'normal')
        ->remove_meta_box('themeisle', 'dashboard', 'normal');

//Remove admin bar links
$cleaner->remove_admin_bar_menu('wp-logo')
        ->remove_admin_bar_menu('view-site')
        ->remove_admin_bar_menu('view-store');

if ( ! current_user_can('administrator')) {
    $cleaner->remove_submenu('edit.php?post_type=staff11', [15]);
}


/**
 * 移动媒体库菜单位置，移除Kadence区块介绍页面
 */
add_action('admin_menu', function ()
{
    global $menu;

    foreach ($menu as $key => $value) {
        if ('upload.php' == $value[ 2 ]) {
            $old_key = $key;
        }
    }

    // 新的媒体菜单位置
    $new_key = 51;
    $menu[ $new_key ] = $menu[ $old_key ];

    unset($menu[ $old_key ]);
    unset($menu[ 100 ]); //kadence区块
});


/**
 * 修改登录连接
 */
add_filter( 'login_headerurl', function ( $url ) {
    return home_url();
} );