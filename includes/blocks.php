<?php

/**
 * 文章类型、分类方法、存档设置、站点设置等自定义字段
 *
 * @package _s
 */

if ( ! class_exists('Carbon_Fields\Container')) {
    return;
}

use Carbon_Fields\Block;
use Carbon_Fields\Field;

add_action('carbon_fields_register_fields', static function ()
{
    Block::make(__('My Shiny Gutenberg Block'))
         ->add_fields([
             Field::make('text', 'heading', __('Block Heading')),
             Field::make('image', 'image', __('Block Image')),
             Field::make('rich_text', 'content', __('Block Content')),
         ])
         ->set_render_callback(function ($fields, $attributes, $inner_blocks)
         {
             ?>

             <div class="block">
                 <div class="block__heading">
                     <h1><?php echo esc_html($fields[ 'heading' ]); ?></h1>
                 </div><!-- /.block__heading -->

                 <div class="block__image">
                     <?php echo wp_get_attachment_image($fields[ 'image' ], 'full'); ?>
                 </div><!-- /.block__image -->

                 <div class="block__content">
                     <?php echo apply_filters('the_content', $fields[ 'content' ]); ?>
                 </div><!-- /.block__content -->
             </div><!-- /.block -->

             <?php
         });
});