<?php
/**
 * Loop Template Name: Product Content
 */
?>


<div class='overflow-hidden bg-white relative rounded-md rs-product group'>
    <figure class='mb-4 rs-product-thumbnail'>
        <a class="block relative" href='<?php the_permalink(); ?>''>
            <div class='overflow-hidden aspect-w-4 aspect-h-3'>
                <?php if ( has_post_thumbnail() ) echo get_the_post_thumbnail( get_the_ID(), 'full', ['class' => 'object-cover'] );  ?>
            </div>
        </a>
    </figure>

    <div class='px-4 pb-4 rs-product-info'>
        <div class='rs-product-info-inner'>
            <div class='mb-1 rs-project-category'>
                <?= get_the_term_list(get_the_ID(), 'project_cat'); ?>
            </div>
            <a href='<?php the_permalink(); ?>'>
                <h2 class='text-lg font-medium line-clamp-2 leading-tight'>
                    <?php the_title(); ?>
                </h2>

                <div class='mt-3 mb-4 line-clamp-3 text-gray-600'>
                    <?= get_post_meta(get_the_ID(), '_wprs_description', true); ?>
                </div>

                <div class='flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 rs-project-read_more'>
                    View Detail
                </div>
            </a>
        </div>
    </div>

</div>