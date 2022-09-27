<?php
/**
 * Loop Template Name: Product Content
 */
?>

<div class='overflow-hidden bg-white relative rounded-md rs-product group wow fadeInUp animated' data-wow-delay='0.<?= $args['index']; ?>s' data-wow-duration='.8s'>
    <figure class='mb-4 rs-product-thumbnail'>
        <a class="block relative" href='<?php the_permalink(); ?>''>
        <div class='overflow-hidden aspect-w-4 aspect-h-3'>
            <?php if (has_post_thumbnail()) {
                echo get_the_post_thumbnail(get_the_ID(), 'full', ['class' => 'object-cover group-hover:scale-125 transition-all duration-300']);
            } ?>
        </div>
        </a>
    </figure>

    <div class='px-4 pb-4 rs-product-info'>
        <div class='rs-product-info-inner'>
            <div class='mb-1 rs-project-category'>
                <?= get_the_term_list(get_the_ID(), 'project_cat'); ?>
            </div>
            <a href='<?php the_permalink(); ?>'>
                <h2 class='text-lg font-medium line-clamp-2 min-h-[45px] leading-tight mb-3'>
                    <?php the_title(); ?>
                </h2>

                <?php if ( ! empty(get_post_meta(get_the_ID(), '_wprs_description', true))) : ?>
                    <div class='mt-3 mb-4 line-clamp-3 text-gray-600'>
                        <?= get_post_meta(get_the_ID(), '_wprs_description', true) ?>
                    </div>
                <?php endif; ?>
            </a>

            <a href='<?php the_permalink(); ?>' data-pid='<?= get_the_ID(); ?>' class='rs-inquiry flex justify-center rounded text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 hover:text-white rs-project-read_more'>
                Add to Inquiry List
            </a>
        </div>
    </div>

</div>