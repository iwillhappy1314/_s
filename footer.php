<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
?>
<?php do_action('_s_before_footer'); ?>

<footer id='colophon' class='site__footer'>

    <?php if (is_active_sidebar('sidebar-footer')): ?>
        <div class="container">
            <?php dynamic_sidebar('sidebar-footer'); ?>
        </div>
    <?php endif; ?>

    <?php if (is_active_sidebar('sidebar-copyright')): ?>
            <?php dynamic_sidebar('sidebar-copyright'); ?>
    <?php endif; ?>

</footer>

</div><!-- #page -->

<?php do_action('_s_after_footer'); ?>

<?php wp_footer(); ?>

</body>
</html>
