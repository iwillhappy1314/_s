<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */

get_header();


$taxonomy = get_queried_object();
$post_type = wprs_get_term_post_type();
$post_type_obj = get_post_type_object($post_type);

$loop_template = get_term_meta($taxonomy->term_id, '_wprs_loop_layout', true);
$cols_lg = get_term_meta($taxonomy->term_id, '_wprs_gird_cols', true);
$cols_md = get_term_meta($taxonomy->term_id, '_wprs_gird_cols_md', true);
$cols_sm = get_term_meta($taxonomy->term_id, '_wprs_gird_cols_sm', true);
$gap_lg = get_term_meta($taxonomy->term_id, '_wprs_gird_gap', true);
$gap_md = get_term_meta($taxonomy->term_id, '_wprs_gird_gap_md', true);
$gap_sm = get_term_meta($taxonomy->term_id, '_wprs_gird_gap_sm', true);
?>
    <div id="content" class="site__content">

        <div id="primary" class="content__primary">
            <main id="main" class="site__main">

                <?php if (have_posts()) : ?>

                    <div class='grid grid-cols-<?= $cols_sm; ?> md:grid-cols-<?= $cols_md; ?> lg:grid-cols-<?= $cols_lg; ?> gap-<?= $gap_sm; ?> md:gap-<?= $gap_md; ?> lg:gap-<?= $gap_lg; ?> divide-y divide-gray-300'>
                        <?php while (have_posts()) : the_post(); ?>
                            <?php get_template_part('template-parts/content', $loop_template) ?>
                        <?php endwhile; ?>
                    </div>

                <?php else : ?>

                    <?php get_template_part('templates/content', 'none'); ?>

                <?php endif; ?>

            </main><!-- #main -->
        </div><!-- #primary -->

        <?php get_sidebar(); ?>

    </div><!-- #content -->

<?php get_footer();
