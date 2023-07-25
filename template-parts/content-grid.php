<?php
/**
 * Template part for displaying posts
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <div class="block rs-entry">

        <a href="<?php the_permalink(); ?>">
            <?php if (has_post_thumbnail()) { ?>
                <div class="aspect aspect-w-4 aspect-h-3 rs-entry__image">
                    <?= get_the_post_thumbnail(get_the_ID(), 'full', ['class' => 'object-cover']); ?>
                </div>
            <?php } ?>
        </a>

        <div class="rs-entry__body mt-2">
            <h2 class="">
                <a href="<?php the_permalink(); ?>">
                    <?php the_title() ?>
                </a>
            </h2>
        </div>
    </div>

</article>
