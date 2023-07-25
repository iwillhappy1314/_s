<?php
get_header();

$taxonomy = get_queried_object();
$post_type = wprs_get_term_post_type();
$post_type_obj = get_post_type_object($post_type);

$loop_template = get_term_meta($taxonomy->term_id, '_wprs_loop_layout', true);
$cols_lg = get_term_meta($taxonomy->term_id, '_wprs_gird_cols', true);
$cols_md = get_term_meta($taxonomy->term_id, '_wprs_gird_cols_md', true);
$cols_sm = get_term_meta($taxonomy->term_id, '_wprs_gird_cols_sm', true);
?>

<div class="container my-6 lg:my-12">

    <div class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8'>

        <div class="widget_categories widget_product_categories">

            <h2 class="widget_categories__title"><?= $post_type_obj->label; ?></h2>
            <ul>
                <?php
                wp_list_categories([
                    'taxonomy'     => $taxonomy->taxonomy,
                    'hierarchical' => true,
                    'depth'        => 2,
                    'title_li'     => false,
                    'hide_empty'   => 0,
                ]);
                ?>
            </ul>

        </div>

        <div class="md:col-span-2 lg:col-span-3">
            <?php if (have_posts()): ?>

                <?php $index = 0; ?>
                <div class='grid grid-cols-<?= $cols_sm; ?> md:grid-cols-<?= $cols_md; ?> lg:grid-cols-<?= $cols_lg; ?> gap-6 lg:gap-8'>
                    <?php while (have_posts()) : the_post(); ?>
                        <?php get_template_part('template-parts/content', $loop_template) ?>
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
