<?php
/**
 * The header for our theme
 *
 * This is the template that displays all the <head> section and everything up until <div id="content">
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
    <?php
    do_action('_s_before_site');
    do_action('_s_before_header');
    ?>

    <?php if (is_active_sidebar('sidebar-top-bar')): ?>
        <div class="site__topbar o-mini-widgets">
            <div class="container flex justify-between items-center">
                <?php dynamic_sidebar('sidebar-top-bar'); ?>
            </div>
        </div>
    <?php endif; ?>

    <?php get_template_part('template-parts/header/style1') ?>

    <div class="site__header-holder"></div>

    <?php do_action('wprs_after_header'); ?>
