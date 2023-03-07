<?php
/**
 * The template for displaying all single posts
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _s
 */

get_header();
?>

    <div id="content" class="site__content">

        <div id="primary" class="rs-sticky-left content__primary">
            <main id="main" class="theiaStickySidebar site__main">

                <?php while (have_posts()) : the_post(); ?>

                    <div class="rs-post">
                        <?php do_action('wprs_before_content'); ?>
                        <div class="rs-post__title">
                            <?php the_title(); ?>
                        </div>
                        <div class="mt-4 typo rs-post__content">
                            <?php the_content(); ?>
                        </div>
                        <?php do_action('wprs_after_content'); ?>
                    </div>

                    <?php the_post_navigation(); ?>

                    <?php
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>

                <?php endwhile; ?>

            </main>
        </div>

        <?php get_sidebar(); ?>

    </div><!-- #content -->

<?php get_footer();