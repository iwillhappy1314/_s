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
    do_action('_s_before_site');
    do_action('_s_before_header');
    ?>

    <?php if (is_active_sidebar('sidebar-top-bar')): ?>
        <div class="site__notice o-mini-widgets">
            <?php dynamic_sidebar('sidebar-top-bar'); ?>
        </div>
    <?php endif; ?>

    <?php get_template_part('templates/header/style2') ?>

    <div class="site__header-holder"></div>

    <?php do_action('wprs_after_header'); ?>
