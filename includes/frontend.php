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

    wp_enqueue_script('wprs-swiper');

    wp_enqueue_script('_s-vendors', _s_assets('dist/scripts/vendors.js'), ['jquery'], SPACENAME, true);
    wp_enqueue_script('_s-main', _s_assets('dist/scripts/main.js'), ['jquery'], SPACENAME, true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

/**
 * Enqueue scripts and styles in wp-admin
 */
add_action('admin_enqueue_scripts', function ()
{
    wp_enqueue_style('_s-admin', _s_assets('dist/styles/admin.css'));
});


add_action('wp_head', function ()
{
    ?>

    <style>
        * {
            --wprs-primary-accent: <?= get_option('_wprs-primary-accent'); ?>;
            --wprs-secondary-accent: <?= get_option('_wprs-secondary-accent'); ?>;
            --wprs-site-bg: <?= get_option('_wprs-site-bg'); ?>;
            --wprs-light-bg: <?= get_option('_wprs-light-bg'); ?>;
            --wprs-dark-bg: <?= get_option('_wprs-dark-bg'); ?>;
            --wprs-text-color: <?= get_option('_wprs-text-color'); ?>;
            --wprs-text-dark-bg: <?= get_option('_wprs-text-dark-bg'); ?>;

            --header-bg: <?= get_option('_wprs-header-bg'); ?>;
            --header-bg-darken: <?= get_option('_wprs-header-bg-darken'); ?>;
            --header-text-color: <?= get_option('_wprs-header-text-color'); ?>;
            --header-border-color: <?= get_option('_wprs-header-border-color'); ?>;
        }
    </style>

    <?php
});