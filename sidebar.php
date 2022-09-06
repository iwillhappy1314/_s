<?php
/**
 * The sidebar containing the main widget area
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
$page_layout = _s_get_page_settings('_page_layouts');

if ( ! is_active_sidebar('sidebar-primary') || $page_layout === 'sidebar_none') {
    return;
}
?>

<aside id="secondary" class="js-sticky-right content__secondary">
    <div class="theiaStickySidebar rs-widgets rs-widgets--primary">
        <?php dynamic_sidebar('sidebar-primary'); ?>
    </div>
</aside><!-- #secondary -->
