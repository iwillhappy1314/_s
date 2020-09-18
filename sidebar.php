<?php
/**
 * The sidebar containing the main widget area
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

if ( ! is_active_sidebar('sidebar-primary') || get_theme_mod('rs_global_layout', 'sidebar-none') === 'sidebar-none') {
    return;
}
?>

<aside id="secondary" class="content__secondary">
    <div class="rs-widgets rs-widgets--primary">
        <?php dynamic_sidebar('sidebar-primary'); ?>
    </div>
</aside><!-- #secondary -->
