<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content">
        <?php esc_html_e('Skip to content', '_s'); ?>
    </a>

    <?php
    /**
     * Filters the header classes.
     *
     * @param string $header_classes Header classes.
     *
     * @since 2.3.7
     */
    $header_classes = apply_filters( 'nv_header_classes', 'header' );

    do_action('_s_before_site');
    do_action('_s_before_header');
    ?>

    <header class="<?php echo esc_attr($header_classes); ?>" role='banner' next-page-hide>
        <a class='neve-skip-link show-on-focus' href='#content'>
            <?php echo __('Skip to content', 'neve'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </a>
        <?php

        /**
         * Executes actions before the header ( navigation ) area.
         *
         * @since 1.0.0
         */
        do_action('neve_before_header_hook');

        if (apply_filters('neve_filter_toggle_content_parts', true, 'header') === true) {
            do_action('neve_do_header');
        }

        /**
         * Executes actions after the header ( navigation ) area.
         *
         * @since 1.0.0
         */
        do_action('neve_after_header_hook');
        ?>
    </header>

    <?php do_action('_s_after_header'); ?>
