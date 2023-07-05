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


// Code in header and footer

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
add_filter('nav_menu_item_args', '_s_append_shortcode_to_menu', 10, 3);
function _s_append_shortcode_to_menu($args, $menu_item, $depth)
{
    $is_mega_menu = get_post_meta($menu_item->ID, 'is_mega_menu', true);

    if ( ! $is_mega_menu && _s_has_shortcode($menu_item)) {
        $args->after = do_shortcode($menu_item->post_content);
    }

    return $args;
}