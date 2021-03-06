<?php
/**
 * 文章类型、分类方法、存档设置、站点设置等自定义字段
 *
 * @package _s
 */

if ( ! class_exists('Carbon_Fields\Container')) {
    return;
}

use Carbon_Fields\Carbon_Fields;
use Carbon_Fields\Container;
use Carbon_Fields\Field;


add_action('after_setup_theme', static function ()
{
    if (class_exists(Carbon_Fields::class)) {
        Carbon_Fields::boot();
    }
});

add_action('carbon_fields_register_fields', static function ()
{

    $types = ['case', 'codex'];
    $types = apply_filters('wprs_type_archive_support', $types);

    /**
     * 分类法存档设置
     */
    foreach ($types as $type) {
        Container::make('theme_options', '_s_archive_settings', __('Archive Settings', '_s'))
                 ->set_page_parent('edit.php?post_type=' . $type)
                 ->add_fields([
                     Field::make('image', $type . '_banner_image', __('Cover image', '_s')),
                     Field::make('text', $type . '_banner_text', __('Cover text', '_s')),
                     Field::make('text', $type . '_title', __('Archive Title', '_s')),
                     Field::make('textarea', $type . '_description', __('Archive Description', '_s')),
                 ]);
    }


    /**
     * 文章类型和分类法数据
     */
    Container::make('term_meta', '_s_category_settings', __('Category Settings', '_s'))
             ->where('term_taxonomy', '=', 'category')
             ->or_where('term_taxonomy', '=', 'post_tag')
             ->or_where('term_taxonomy', '=', 'handbook')
             ->add_fields([
                 Field::make('image', 'banner_image', __('Cover image', '_s')),
                 Field::make('text', 'banner_text', __('Banner Text', '_s')),
                 Field::make('text', 'per_page', __('Posts Per Page', '_s')),
             ]);

    /**
     * 案例参数
     */
    Container::make('post_meta', '_s_case_meta', __('Page Settings', '_s'))
             ->where('post_type', '=', 'page')
             ->set_context('side')
             ->set_priority('low')
             ->add_fields([
                 Field::make('radio_image', 'page_layouts', __('Page Layouts', '_s'))
                      ->set_options([
                          'mountain' => 'https://source.unsplash.com/X1UTzW8e7Q4/800x600',
                          'temple'   => 'https://source.unsplash.com/ioJVccFmWxE/800x600',
                          'road'     => 'https://source.unsplash.com/5c8fczgvar0/800x600',
                      ]),
             ]);

    /**
     * 案例参数
     */
    Container::make('post_meta', '_s_case_meta', __('Case Data', '_s'))
             ->where('post_type', '=', 'product')
             ->set_context('side')
             ->set_priority('low')
             ->add_fields([
                 Field::make('text', 'link', __('Demo url', '_s')),
             ]);


    /**
     * 主题设置
     */
    Container::make('theme_options', '_s_theme_options', __('Theme Options', '_s'))
             ->set_page_parent('themes.php')
             ->add_tab(__('General Options', '_s'), [
                 Field::make('checkbox', 'is_cleanup', __('Clean up useless menus for normal user', '_s')),
                 Field::make('checkbox', 'deny_modify', __('Deny modify files in backend', '_s')),
             ])
             ->add_tab(__('Footer Options', '_s'), [
                 Field::make('text', 'beian', __('Beian number', '_s')),
                 Field::make('text', 'copyright', __('Copyright text', '_s')),
             ])
             ->add_tab(__('Code Option', '_s'), [
                 Field::make('header_scripts', 'code_before_head', __('Code before </head>', '_s')),
                 Field::make('footer_scripts', 'code_before_body', __('Code before </body>', '_s')),
             ]);


    /**
     * 导航栏设置
     */
    Container::make('nav_menu_item', '_s_nav_menu_options', 'Menu Settings')
             ->add_fields([

                 Field::make('select', 'menu_type', __('Menu Type', '_s'))
                      ->set_options([
                          ''          => __('Normal', '_s'),
                          'shortcode' => __('Render shortcode content', '_s'),
                      ]),

                 Field::make('textarea', 'menu_content', __('Enter a shortcode', '_s'))
                      ->set_conditional_logic([
                          'relation' => 'AND',
                          [
                              'field'   => 'menu_type',
                              'value'   => 'shortcode',
                              'compare' => '=',
                          ],
                      ]),
             ]);
});


