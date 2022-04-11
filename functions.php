<?php

define('SPACENAME', '1.1.2');
define( 'NEVE_VERSION', '3.2.2' );
define( 'NEVE_INC_DIR', trailingslashit( get_template_directory() ) . 'inc/' );
define( 'NEVE_ASSETS_URL', trailingslashit( get_template_directory_uri() ) . 'assets/' );
define( 'NEVE_MAIN_DIR', get_template_directory() . '/' );

if ( ! defined( 'NEVE_DEBUG' ) ) {
    define( 'NEVE_DEBUG', false );
}

define( 'NEVE_NEW_DYNAMIC_STYLE', true );

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
    require_once(get_theme_file_path('includes/woocommerce.php'));
}

require_once 'globals/migrations.php';
require_once 'globals/utilities.php';
require_once 'globals/hooks.php';
require_once 'globals/sanitize-functions.php';
require_once get_theme_file_path('start.php');
require_once get_theme_file_path('header-footer-grid/loader.php');