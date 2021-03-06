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

<?php if (is_active_sidebar('sidebar-below-content')) : ?>
    <div class="rs-widgets rs-widgets--below-content">
        <?php dynamic_sidebar('sidebar-below-content'); ?>
    </div>
<?php endif; ?>

<footer id="colophon" class="site__footer">

    <?php if (is_active_sidebar('sidebar-footer')): ?>
        <div class="content__footer">
            <section class="container">
                <div class="rs-widgets rs-widgets--footer">
                    <?php dynamic_sidebar('sidebar-footer'); ?>
                </div>
            </section>
        </div>
    <?php endif; ?>

    <div class="py-4 site__info">
        <div class="container">
            Copyright &copy; <?= date('Y'); ?> <a href="<?= home_url(); ?>"><?php bloginfo('name'); ?></a>
        </div>
    </div>

</footer>

</div><!-- #page -->

<?php do_action('_s_after_footer'); ?>

<?php wp_footer(); ?>

</body>
</html>
