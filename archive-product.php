<?php get_header(); ?>

<div class="container my-6 lg:my-12">

    <?php
    $terms = get_terms([
        'taxonomy' => 'product_cat',
    ]);
    ?>

    <div class='gallery-area'>

        <div class='navbarsort'>
            <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbarfiltr' aria-expanded='false'>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
            </button>
            <div class='shorttitle'>
                <h2>Sort Gallery</h2>
            </div>
        </div>

        <div class='collapse navbar-collapse latest--project' id='navbarfiltr'>
            <ul class='simplefilter flex flex-wrap'>
                <li class='rs-button whitespace-nowrap' data-filter='*'>All</li>
                <?php foreach ($terms as $term): ?>
                    <li data-filter='.term-<?= $term->term_id; ?>' class='rs-button whitespace-nowrap'><?= $term->name; ?></li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 gallery-container'>

            <?php if (have_posts()): ?>

                <?php while (have_posts()) : the_post(); ?>
                    <?php $pterms = wp_get_post_terms(get_the_ID(), 'product_cat') ?>
                    <div class='filtr-item term-<?= $pterms[ 0 ]->term_id; ?>'>
                        <?php \WenpriseContentComponents\Helpers::get_template_part('content', 'product'); ?>
                    </div>
                <?php endwhile; ?>

            <?php endif ?>

        </div>

    </div>

</div>

<?php get_footer(); ?>
