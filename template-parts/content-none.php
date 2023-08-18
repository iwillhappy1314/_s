<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package qinghaixinbao
 */

?>

<section class="no-results not-found">
    <div class="container--focus text-center mx-auto py-12 lg:py-16">

        <div class="max-w-[16rem] mx-auto mb-8 lg:mb-12">
            <img src="<?= qinghaixinbao_assets('dist/images/empty.svg'); ?>" alt="Nothing found" />
        </div>

        <header class="mb-4 text-2xl lg:text-4xl">
            <?php esc_html_e('Nothing Found', 'qinghaixinbao'); ?>
        </header>

        <?php if (is_search()) : ?>

            <p>
                <?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'qinghaixinbao'); ?>
            </p>

        <?php else : ?>

            <p>
                <?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'qinghaixinbao'); ?>
            </p>

        <?php endif; ?>
    </div>
</section>
