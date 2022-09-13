<?php
/**
 * @package _s
 */

add_action('wp_enqueue_scripts', '_s_scripts', 1);

/**
 * Enqueue scripts and styles.
 */
function _s_scripts()
{
    wp_enqueue_style('_s-main', _s_assets('dist/styles/main.css'));
    wp_enqueue_style('_s-iconfont', _s_assets('dist/styles/iconfont.css'));

    if (is_singular()) {
        wp_enqueue_style('_s-post', _s_assets('dist/styles/post.css'));
    }

    wp_enqueue_script('_s-main', _s_assets('dist/scripts/main.js'), ['jquery'], SPACENAME, true);

    $template_path = parse_url(get_template_directory_uri(), PHP_URL_PATH);

    wp_localize_script('_s-main', 'wenpriseSettings', [
        'staticPath' => $template_path . '/frontend/static/',
    ]);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

/**
 * Disable Weforms CSS
 */
add_filter('weforms_frontend_styles', function ($styles)
{
    if ( ! is_admin()) {
        $styles = [];
    }

    return $styles;
});

/**
 * Enqueue scripts and styles in wp-admin
 */
add_action('admin_enqueue_scripts', function ()
{
    wp_enqueue_style('_s-admin', _s_assets('dist/styles/admin.css'));
});