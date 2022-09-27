<?php get_header(); ?>

<div class="container my-6 lg:my-12">

    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>

        <div class="widget_categories widget_product_categories">

            <ul>
                <?php
                wp_list_categories([
                    'taxonomy' => 'product_cat',
                    'title_li' => false,
                    'parent' => 0,
                ]);
                ?>
            </ul>

        </div>

        <div class="lg:col-span-3">
            <?php if (have_posts()): ?>

                <?php $index = 0; ?>
                <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
                    <?php while (have_posts()) : the_post(); ?>
                        <?php \WenpriseContentComponents\Helpers::get_template_part('content', 'product', ['index' => $index]); ?>
                        <?php $index++; ?>
                    <?php endwhile; ?>
                </div>

                <div class="mt-6">
                    <?php wprs_pagination(); ?>
                </div>

            <?php endif ?>
        </div>

    </div>

</div>

<?php get_footer(); ?>
