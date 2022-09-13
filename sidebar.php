<?php
/**
 * The sidebar containing the main widget area
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
$page_layout = WenpriseContentComponents\Helpers::get_page_settings('_page_layout', 'sidebar_none');

if ( ! is_active_sidebar('sidebar-primary') || $page_layout === 'sidebar_none') {
    return;
}
?>

<aside id="secondary" class="rs-sticky-right content__secondary">
    <div class="theiaStickySidebar rs-widgets rs-widgets--primary">
        <?php dynamic_sidebar('sidebar-primary'); ?>
    </div>
</aside><!-- #secondary -->
