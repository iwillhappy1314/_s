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


function wprs_get_page_heading_fields($prefix = 'wprs')
{
    return [
        Field::make('checkbox', ($prefix ?? 'wprs') . '_header_disabled', __('Disable Page Header', '_s')),
        Field::make('text', ($prefix ?? 'wprs') . '_header_title', __('Page Title', '_s')),
        Field::make('color', ($prefix ?? 'wprs') . '_header_text_color', __('Page Header Text Color', '_s')),
        Field::make('color', ($prefix ?? 'wprs') . '_header_bg_color', __('Page Header Background Color', '_s')),
        Field::make('image', ($prefix ?? 'wprs') . '_header_bg_image', __('Page Header Background Image', '_s')),
    ];
}


function wprs_get_page_layout_fields($prefix = 'wprs')
{
    return [
        Field::make('radio_image', ($prefix ?? 'wprs') . '_page_layouts', __('Page Layouts', '_s'))
             ->set_options([
                 'sidebar_none'  => _s_assets('dist/images/sidebar-none.png'),
                 'sidebar_left'  => _s_assets('dist/images/sidebar-left.png'),
                 'sidebar_right' => _s_assets('dist/images/sidebar-right.png'),
             ]),
    ];
}


add_action('carbon_fields_register_fields', static function ()
{
    $types = ['case', 'codex', 'video'];
    $types = apply_filters('wprs_type_archive_support', $types);

    /**
     * 分类法存档设置
     */
    foreach ($types as $type) {
        Container::make('theme_options', '_s_archive_settings', __('Archive Settings', '_s'))
                 ->set_page_parent('edit.php?post_type=' . $type)
                 ->add_tab(__('Page Header Style', '_s'), wprs_get_page_heading_fields($type))
                 ->add_tab(__('Page Layout', '_s'), wprs_get_page_layout_fields($type));
    }


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
    global $wenprise_settings_fields;

    $wenprise_settings_fields = Container::make('theme_options', '_s_theme_options', __('Theme Options', '_s'))
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
     * 分类方法通用设置
     */
    Container::make('term_meta', '_s_category_settings', __('Category Settings', '_s'))
             ->add_fields(wprs_get_page_heading_fields())
             ->add_fields(wprs_get_page_layout_fields());

    /**
     * 页面通用设置
     */
    global $wenprise_fields;
    $wenprise_fields = Container::make('post_meta', '_s_content_options', __('Page Settings', '_s'))
                                ->set_priority('core')
                                ->add_tab(__('Page Header Style', '_s'), wprs_get_page_heading_fields())
                                ->add_tab(__('Page Layout', '_s'), wprs_get_page_layout_fields());

}, 1);


if (class_exists('CSF')) {
    // Set a unique slug-like ID
    $prefix = '_s_menu_options';

    // Create profile options
    CSF::createNavMenuOptions($prefix, [
        'data_type' => 'unserialize',
    ]);

    // Create a section
    CSF::createSection($prefix, [
        'fields' => [

            [
                'id'      => 'is_mega_menu',
                'type'    => 'checkbox',
                'title'   => 'Mega menu',
                'label'   => 'Show as mega menu',
                'default' => false,
            ],

        ],
    ]);
}