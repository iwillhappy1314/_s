<?php

/**
 * These functions can be replaced via plugins. If plugins do not redefine these
 * functions, then these will be used instead.
 *
 * @package _s
 */

add_filter('nav_menu_css_class', '_s_menu_css_class', 10, 4);
add_filter('walker_nav_menu_start_el', '_s_render_mega_menu_content', 10, 4);
add_filter('nav_menu_submenu_css_class', '_s_submenu_css_class');
add_filter('widget_nav_menu_args', '_s_widget_menu_args');
add_filter('nav_menu_item_title', '_s_render_shortcode_in_menu_title');
add_filter('nav_menu_item_args', '_s_append_shortcode_to_menu', 10, 3);

// Page headers
add_filter('_s_after_header', '_s_render_page_header', 10, 3);
add_filter('_s_after_header', '_s_render_archive_header', 10, 3);
add_filter('_s_after_header', '_s_render_taxonomy_header', 10, 3);

// Code in header and footer
add_action('wp_head', function ()
{
    echo get_option('code_before_head');
}, PHP_INT_MAX);


add_action('wp_footer', function ()
{
    echo get_option('code_before_body');
}, PHP_INT_MAX);


add_action('body_class', function ($classes)
{
    $classes[] = str_replace('_', '-', _s_get_page_settings('_page_layouts'));

    if(get_option('_wprs_enable_sticky') === 'yes'){
        $classes[] = 'rs-sticky';
    }

    return $classes;
});


if ( ! function_exists('_s_submenu_css_class')) {
    /**
     * 导航菜单子菜单添加 CSS 类
     *
     * @param $classes
     *
     * @return mixed
     */
    function _s_submenu_css_class($classes)
    {
        $classes[] = 'has-submenu';

        return $classes;
    }
}


if ( ! function_exists('_s_widget_menu_args')) {
    /**
     * 导航菜单添加 CSS 类
     *
     * @param $nav_menu_args
     *
     * @return mixed
     */
    function _s_widget_menu_args($nav_menu_args)
    {
        // $nav_menu_args['menu_class'] = 'sm sm-vertical sm-menu nav-menu';

        return $nav_menu_args;
    }
}


if ( ! function_exists('_s_menu_css_class')) {
    /**
     * Add mega menu class to nav menu
     *
     * @param $classes
     * @param $item
     * @param $args
     * @param $depth
     *
     * @return mixed
     */
    function _s_menu_css_class($classes, $item, $args, $depth)
    {
        $is_mega_menu = get_post_meta($item->ID, 'is_mega_menu', true);

        if ($is_mega_menu) {
            $classes[] = 'sm-mega-menu';
        }

        if (_s_has_shortcode($item)) {
            $classes[] = 'menu-item-has-children';
        }

        return $classes;
    }
}


if ( ! function_exists('_s_render_shortcode_in_menu_title')) {
    /**
     * Render shortcode in menu title
     */
    function _s_render_shortcode_in_menu_title($title)
    {
        return do_shortcode($title);
    }
}


if ( ! function_exists('_s_render_mega_menu_content')) {
    /**
     * 渲染自定义到导航菜单内容
     *
     * @param $item_output
     * @param $item
     * @param $depth
     * @param $args
     *
     * @return string
     */
    function _s_render_mega_menu_content($item_output, $item, $depth, $args)
    {
        $html         = '';
        $is_mega_menu = get_post_meta($item->ID, 'is_mega_menu', true);

        if ($is_mega_menu) {
            $html .= '<ul class="rs-mega-menu">';
            $html .= '<li>';

            $html .= do_shortcode($item->post_content);

            $html .= '</ul>';
            $html .= '</li>';
        }

        return $item_output . $html;
    }
}


/**
 * Append shortcode content
 */
function _s_append_shortcode_to_menu($args, $menu_item, $depth)
{
    $is_mega_menu = get_post_meta($menu_item->ID, 'is_mega_menu', true);

    if ( ! $is_mega_menu && _s_has_shortcode($menu_item)) {
        $args->after = do_shortcode($menu_item->post_content);
    }

    return $args;
}


/**
 * 显示页面页头
 *
 * @return false|void
 */
function _s_render_page_header()
{
    // Not single / home page / Elementor Page
    if ( ! is_singular() || is_front_page() || is_home() || get_post_meta(get_queried_object_id(), '_elementor_edit_mode', true) === 'builder') {
        return false;
    }

    if (function_exists('is_shop') && is_shop()) {
        return false;
    }

    // WooCommerce functions page
    if (function_exists('is_account_page')) {
        if (is_account_page() || is_cart() || is_checkout()) {
            return false;
        }
    }

    $post_id   = get_queried_object()->ID;
    $post_type = get_queried_object()->post_type;

    // Disabled in page settings
    $disabled     = get_post_meta(get_the_ID(), '_wprs_header_disabled', true);
    $text_color   = get_post_meta($post_id, '_wprs_header_text_color', true);
    $bg_color     = get_post_meta($post_id, '_wprs_header_bg_color', true);
    $bg_image     = get_post_meta($post_id, '_wprs_header_bg_image', true);
    $header_title = get_post_meta($post_id, '_wprs_header_title', true);

    // 如果分类方法的各种选项都没有设置，沿用对应文章类型的
    if ( ! $text_color && ! $bg_color && ! $bg_image) {
        $disabled   = _s_get_archive_option($post_type, '_header_disabled');
        $text_color = _s_get_archive_option($post_type, '_header_text_color');
        $bg_color   = _s_get_archive_option($post_type, '_header_bg_color');
        $bg_image   = _s_get_archive_option($post_type, '_header_bg_image');
    }

    if ($disabled === 'yes') {
        return false;
    }

    if ( ! $header_title) {
        $header_title = get_the_title();
    }
    ?>

    <style>
        .site__banner {
            --wprs-text-color: <?= $text_color; ?>;
            --wprs-bg-color: <?= $bg_color; ?>;
            --wprs-bg-image: url("<?= wp_get_attachment_url($bg_image); ?>");
        }
    </style>

    <div class='site__banner py-8'>
        <div class='container text-center'>
            <div class='site__banner--inner'>
                <div class='date'>
                    <span class='site__banner--date mb-2'>
                        <?= get_the_time(get_option('date_format'), get_the_ID()); ?>
                    </span>
                </div>
                <h1 class="text-4xl"><?= $header_title; ?></h1>
            </div>
        </div>
    </div>

    <?php

}


/**
 * 显示存档页面页头
 *
 * @return false|void
 */
function _s_render_archive_header()
{
    if ( ! is_post_type_archive()) {
        return false;
    }

    $post_type = get_queried_object()->name;

    // Disabled in page settings
    $disabled = _s_get_archive_option($post_type, '_header_disabled');

    if ($disabled === 'yes') {
        return false;
    }

    $text_color   = _s_get_archive_option($post_type, '_header_text_color');
    $bg_color     = _s_get_archive_option($post_type, '_header_bg_color');
    $bg_image     = _s_get_archive_option($post_type, '_header_bg_image');
    $header_title = _s_get_archive_option($post_type, '_header_title');
    ?>

    <style>
        .site__banner {
            --wprs-text-color: <?= $text_color; ?>;
            --wprs-bg-color: <?= $bg_color; ?>;
            --wprs-bg-image: url("<?= wp_get_attachment_url($bg_image); ?>");
        }
    </style>

    <div class='site__banner py-8'>
        <div class='container text-center'>
            <div class='site__banner--inner'>
                <h1 class="text-4xl"><?= $header_title; ?></h1>
            </div>
        </div>
    </div>

    <?php

}


/**
 * 显示分类法项目页头
 *
 * @return false|void
 */
function _s_render_taxonomy_header()
{
    if ( ! is_tax()) {
        return false;
    }

    $term_id   = get_queried_object()->term_id;
    $post_type = wprs_get_taxonomy_type();

    // Disabled in page settings
    $disabled     = get_term_meta($term_id, '_wprs_header_disabled', true);
    $text_color   = get_term_meta($term_id, '_wprs_header_text_color', true);
    $bg_color     = get_term_meta($term_id, '_wprs_header_bg_color', true);
    $bg_image     = get_term_meta($term_id, '_wprs_header_bg_image', true);
    $header_title = get_term_meta($term_id, '_wprs_header_title', true);

    // 如果分类方法的各种选项都没有设置，沿用对应文章类型的
    if ( ! $text_color && ! $bg_color && ! $bg_image) {
        $disabled     = _s_get_archive_option($post_type, '_header_disabled');
        $text_color   = _s_get_archive_option($post_type, '_header_text_color');
        $bg_color     = _s_get_archive_option($post_type, '_header_bg_color');
        $bg_image     = _s_get_archive_option($post_type, '_header_bg_image');
        $header_title = _s_get_archive_option($post_type, '_header_title');
    }

    if ($disabled === 'yes') {
        return false;
    }
    ?>

    <style>
        .site__banner {
            --wprs-text-color: <?= $text_color; ?>;
            --wprs-bg-color: <?= $bg_color; ?>;
            --wprs-bg-image: url("<?= wp_get_attachment_url($bg_image); ?>");
        }
    </style>

    <div class='site__banner py-8'>
        <div class='container text-center'>
            <div class='site__banner--inner'>
                <h1 class="text-4xl"><?= $header_title; ?></h1>
            </div>
        </div>
    </div>

    <?php
}