<?php
/**
 * Template part for displaying posts
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elisi
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <div class="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 rs-entry">
        <?php if (has_post_thumbnail()) { ?>
            <div class="aspect aspect-w-4 aspect-h-3 rs-entry__image">
                <?= get_the_post_thumbnail(get_the_ID(), 'full', ['class' => 'object-cover']); ?>
            </div>
        <?php } ?>

        <div class="sm:col-span-2 lg:col-span-3 rs-entry__body">
            <div class="rs-entry__tag">
                <?php the_category(); ?>
            </div>

            <h2 class="rs-entry__title">
                <a href="<?php the_permalink(); ?>">
                    <?php the_title() ?>
                </a>
            </h2>

            <div class="typo">
                <?php the_excerpt(); ?>
            </div>

            <footer class="rs-entry__footer">
                <div class="rs-entry__date">
                    <?php the_time('Y-m-d'); ?>
                </div>
                <div class="rs-entry__more">
                    <a href="<?php the_permalink(); ?>" class="rs-button rs-button--sm">View more></a>
                </div>
            </footer>
        </div>
    </div>

</article>
