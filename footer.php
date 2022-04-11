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

<footer id="colophon" class="site__footer">

    <?php

    /**
     * Executes actions after main tag is closed.
     *
     * @since 1.0.4
     */
    do_action( 'neve_after_primary' );

    /**
     * Filters the content parts.
     *
     * @since 1.0.9
     *
     * @param bool   $status Whether the component should be displayed or not.
     * @param string $context The context name.
     */
    if ( apply_filters( 'neve_filter_toggle_content_parts', true, 'footer' ) === true ) {

        /**
         * Executes actions before the footer was rendered.
         *
         * @since 1.0.0
         */
        do_action( 'neve_before_footer_hook' );

        /**
         * Executes the rendering function for the footer.
         *
         * @since 1.0.0
         */
        do_action( 'neve_do_footer' );

        /**
         * Executes actions after the footer was rendered.
         *
         * @since 1.0.0
         */
        do_action( 'neve_after_footer_hook' );
    }
    ?>

</footer>

</div><!-- #page -->

<?php do_action('_s_after_footer'); ?>

<?php wp_footer(); ?>

</body>
</html>
