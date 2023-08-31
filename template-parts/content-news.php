<?php
/**
 * Template part for displaying posts
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elisi
 */

$options = get_option('wenprise-site-settings');
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('pt-8 first:pt-0 mb-8 last:mb-0 lg:px-0'); ?>>

    <a href="<?php the_permalink(); ?>" class="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6 rs-entry group">

        <div class="w-24 h-24 flex flex-wrap flex-shrink-0 items-center justify-center justify-items-center text-center py-2 bg-gray-300 leading-none text-gray-700 rounded-sm group-hover:bg-primary">
            <div class="w-full text-3xl group-hover:text-white"><?= get_the_time('d'); ?></div>
            <div class="text-center h-[1px] bg-gray-500  group-hover:bg-white w-16"></div>
            <div class="w-full group-hover:text-white"><?= get_the_time('Y-m'); ?></div>
        </div>

        <div class="lg:col-span-2 xl:col-span-3 flex flex-col justify-between rs-entry__body flex-grow">
            <div>
                <h2 class="rs-entry__title -mt-1 group-hover:text-secondary">
                    <?php the_title() ?>
                </h2>

                <div class="typo line-clamp-2">
                    <?= mb_strimwidth(strip_tags(get_the_content()), 0, 140, "…"); ?>
                </div>
            </div>

            <footer class="rs-entry__footer mt-4 lg:mt-2">
                <div class="rs-entry__date">
                    <span class="rs-icon rs-icon-calendar"></span>
                    <?php the_time('Y-m-d'); ?>
                </div>
            </footer>
        </div>
    </a>

</article>
