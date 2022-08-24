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

    <header id="masthead" class="site__header">
        <div class="container">
            <div class="site__branding">
                <?php the_custom_logo(); ?>

                <?php if ( ! has_custom_logo()) : ?>
                    <h1><a href="<?= home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
                <?php endif; ?>
            </div>

            <?php do_action('_s_before_navigation'); ?>

            <nav id="site-navigation" class="site__nav main-navigation">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span><?php esc_html_e('Menu', '_s'); ?></span>
                </button>
                <?php
                wp_nav_menu([
                    'theme_location' => 'menu-primary',
                    'menu_id'        => 'primary-menu',
                    'menu_class'     => 'sm sm-menu nav-menu',
                    'fallback_cb'    => '_s_page_menu',
                ]);
                ?>
            </nav>

            <?php do_action('_s_after_navigation'); ?>

        </div>
    </header>

    <?php do_action('_s_after_header'); ?>
