<?php
/**
 * These functions can be replaced via plugins. If plugins do not redefine these
 * functions, then these will be used instead.
 *
 * @package _s
 */

add_filter('nav_menu_submenu_css_class', '_s_submenu_css_class');
add_filter('widget_nav_menu_args', '_s_widget_menu_args');

if ( ! function_exists('_s_submenu_css_class')) {
    function _s_submenu_css_class($classes)
    {
        $classes[] = 'has-submenu';

        return $classes;
    }
}


if ( ! function_exists('_s_widget_menu_args')) {
    function _s_widget_menu_args($nav_menu_args)
    {
        $nav_menu_args[ 'menu_class' ] = 'sm sm-vertical sm-menu nav-menu';

        return $nav_menu_args;
    }
}