<?php

define('SPACENAME', '1.1.2');
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
    require_once(get_theme_file_path('includes/woocommerce.php'));
}

define( 'KADENCE_VERSION', '1.1.26' );
define( 'KADENCE_MINIMUM_WP_VERSION', '5.4' );
define( 'KADENCE_MINIMUM_PHP_VERSION', '7.2' );

// Bail if requirements are not met.
if ( version_compare( $GLOBALS['wp_version'], KADENCE_MINIMUM_WP_VERSION, '<' ) || version_compare( phpversion(), KADENCE_MINIMUM_PHP_VERSION, '<' ) ) {
    require get_template_directory() . '/inc/back-compat.php';
    return;
}
// Include WordPress shims.
require get_template_directory() . '/inc/wordpress-shims.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/class-theme.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/functions.php';

// Initialize the theme.
call_user_func( 'Kadence\kadence' );
