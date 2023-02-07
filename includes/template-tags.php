<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package _s
 */
function _s_page_menu()
{
    wp_page_menu(
        [
            'container'  => 'ul',
            'before'     => '',
            'after'      => '',
            'menu_id'    => 'primary-menu',
            'menu_class' => 'sm sm-menu nav-menu',
        ]
    );
}