<?php get_header(); ?>

<div class="container my-6 lg:my-12">
    <?php if (have_posts()): ?>

        <?php while (have_posts()) : the_post(); ?>

            <?php $gallery = get_post_meta(get_the_ID(), '_gallery', true); ?>
            <?php $gallery = explode(',', $gallery); ?>

            <div class="lg:grid lg:grid-cols-2 gap-6">
                <div class='o-product-gallery relative overflow-hidden'>

                    <div class='relative rs-swiper swiper-container rs-gallery-top'>
                        <div class='swiper-wrapper'>
                            <?php foreach ($gallery as $image_id): ?>
                                <div class='swiper-slide'>
                                    <figure>
                                        <a href='<?= wp_get_attachment_url($image_id); ?>' data-size='1000x1000' >
                                            <?= wp_get_attachment_image($image_id, [1200, 1200], '', ['class' => '']); ?>
                                        </a>
                                    </figure>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <!-- Add Arrows -->
                        <div class='swiper-button-next'></div>
                        <div class='swiper-button-prev'></div>
                    </div>

                    <div class='relative rs-swiper swiper-container rs-gallery-thumbs'>
                        <div class='swiper-wrapper'>
                            <?php foreach ($gallery as $image_id): ?>
                                <div class='swiper-slide'>
                                    <?= wp_get_attachment_image($image_id, 'full', '', ['class' => '']); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <!-- Add Arrows -->
                        <div class='swiper-button-next'></div>
                        <div class='swiper-button-prev'></div>
                    </div>

                </div>

                <div class="content">
                    <h2 class="text-3xl"><?php the_title(); ?></h2>

                    <div class="mt-6"><?php the_excerpt(); ?></div>
                </div>
            </div>

            <div class="mt-8 typo">
                <?php the_content(); ?>
            </div>
        <?php endwhile; ?>

    <?php endif ?>
</div>

<?php get_footer(); ?>
