<?php

define('SPACENAME_VERSION', '1.1.2');
define('WENPRISE_INCLUDES_PATH', get_theme_file_path('includes/'));


/**
 * _s functions and definitions
 *
 * @link    https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */
require_once(get_theme_file_path('vendor/autoload.php'));


/**
 * Theme support setup
 */
require_once(get_theme_file_path('includes/setup.php'));


/**
 * Theme helper functions
 */
require_once(get_theme_file_path('includes/helpers.php'));


/**
 * Theme Shortcode
 */
require_once(get_theme_file_path('includes/shortcodes.php'));


/**
 * Custom fields
 */
require_once(get_theme_file_path('includes/fields.php'));


/**
 * Custom Block
 */
require_once(get_theme_file_path('includes/blocks.php'));


/**
 * Theme Assets
 */
require_once(get_theme_file_path('includes/frontend.php'));


/**
 * pluggable functions
 */
require_once(get_theme_file_path('includes/pluggable.php'));


/**
 * Custom template tags for this theme.
 */
require_once(get_theme_file_path('includes/template-tags.php'));


/**
 * Customizer additions.
 */
require_once(get_theme_file_path('includes/customizer.php'));


/**
 * Cleanup assets
 */
require_once(get_theme_file_path('includes/cleanup.php'));


/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
    require_once(get_theme_file_path('includes/woocommerce/setup.php'));
    require_once(get_theme_file_path('includes/woocommerce/frontend.php'));
    require_once(get_theme_file_path('includes/woocommerce/fields.php'));
    require_once(get_theme_file_path('includes/woocommerce/elements.php'));
    require_once(get_theme_file_path('includes/woocommerce/shortcodes.php'));
}

