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
    $fields = [
        Field::make('checkbox', ($prefix ?? 'wprs') . '_header_disabled', __('Disable Page Header', '_s')),
        Field::make('color', ($prefix ?? 'wprs') . '_header_text_color', __('Page Header Text Color', '_s')),
        Field::make('color', ($prefix ?? 'wprs') . '_header_bg_color', __('Page Header Background Color', '_s')),
        Field::make('image', ($prefix ?? 'wprs') . '_header_bg_image', __('Page Header Background Image', '_s')),
    ];

    return apply_filters('wprs_heading_fields', $fields);
}


function wprs_get_page_content_fields($prefix = 'wprs')
{
    $fields = [
        Field::make('image', ($prefix ?? 'wprs') . '_thumbnail', __('Content Thumbnail', '_s'))->set_width(20),
        Field::make('media_gallery', ($prefix ?? 'wprs') . '_gallery', __('Content Gallery', '_s'))->set_width(80),
        Field::make('text', ($prefix ?? 'wprs') . '_title', __('Content Title', '_s')),
        Field::make('textarea', ($prefix ?? 'wprs') . '_description', __('Content Description', '_s')),
        Field::make('text', ($prefix ?? 'wprs') . '_link', __('Content Link', '_s')),
        Field::make('text', ($prefix ?? 'wprs') . '_form_short_code', __('Form Shortcode', '_s')),
        Field::make('file', ($prefix ?? 'wprs') . '_video_file', __('Video File', '_s'))->set_width(20),
        Field::make('textarea', ($prefix ?? 'wprs') . '_video_link', __('Embed Video Link', '_s'))->set_width(80),
    ];

    return apply_filters('wprs_page_content_fields', $fields);
}


function wprs_get_page_layout_fields($prefix = 'wprs')
{
    $fields = [
        Field::make('radio_image', ($prefix ?? 'wprs') . '_page_layouts', __('Page Layouts', '_s'))
             ->set_options([
                 'sidebar_none'  => _s_assets('dist/images/sidebar-none.png'),
                 'sidebar_left'  => _s_assets('dist/images/sidebar-left.png'),
                 'sidebar_right' => _s_assets('dist/images/sidebar-right.png'),
             ]),
    ];

    return apply_filters('wprs_layout_fields', $fields);
}


add_action('carbon_fields_register_fields', static function ()
{
    $types = ['post', 'product'];
    $types = apply_filters('wprs_type_archive_support', $types);

    /**
     * 分类法存档设置
     */
    foreach ($types as $type) {

        $page_parent = $type === 'post' ? 'edit.php' : 'edit.php?post_type=' . $type;

        Container::make('theme_options', '_s_archive_settings', __('Archive Settings', '_s'))
                 ->set_page_parent($page_parent)
                 ->add_tab(__('Page Content', '_s'), wprs_get_page_content_fields($type))
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
                                         ->add_tab(__('Global Style', '_s'), [
                                             Field::make('color', 'wprs-primary-accent', __('Primary Accent', '_s')),
                                             Field::make('color', 'wprs-secondary-accent', __('Secondary Accent', '_s')),
                                             Field::make('color', 'wprs-site-bg', __('Site Background', '_s')),
                                             Field::make('color', 'wprs-light-bg', __('Light Background', '_s')),
                                             Field::make('color', 'wprs-dark-bg', __('Dark Background', '_s')),
                                             Field::make('color', 'wprs-text-color', __('Text Color', '_s')),
                                             Field::make('color', 'wprs-text-dark-bg', __('Text Dark Background', '_s')),
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

    // add_filter('wprs_page_content_fields', function ($fields)
    // {
    //     $fields[] = Field::make('complex', 'features', __('Features'))
    //                      ->add_fields([
    //                          Field::make('image', 'photo', __('Feature Image'))->set_width(33),
    //                          Field::make('text', 'title', __('Feature Title'))->set_width(33),
    //                          Field::make('textarea', 'description', __('Feature Description'))->set_width(33),
    //                      ]);
    //
    //     return $fields;
    // });

    /**
     * 页面通用设置
     */
    global $wenprise_fields;
    $wenprise_fields = Container::make('post_meta', '_s_content_options', __('Page Settings', '_s'))
                                ->set_priority('core')
                                ->add_tab(__('Page Content', '_s'), wprs_get_page_content_fields())
                                ->add_tab(__('Page Header Style', '_s'), wprs_get_page_heading_fields())
                                ->add_tab(__('Page Layout', '_s'), wprs_get_page_layout_fields());

    $post_type = isset($_GET[ 'post' ]) ? get_post_type($_GET[ 'post' ]) : $_GET[ 'post_type' ];

    if ($post_type === 'page') {
        $wenprise_fields->add_tab(__('Content Source', '_s'), [
            Field::make('select', 'wprs_post_type', __('Post Type', '_s'))->set_options(wprs_data_post_types()),
            Field::make('select', 'wprs_taxonomy', __('Taxonomy', '_s'))->set_options(wprs_data_taxonomies()),
            Field::make('text', 'wprs_term', __('Term', '_s')),
            Field::make('select', 'wprs_order_by', __('Order By', '_s'))->set_options(['menu_order' => __('Menu Order', '_s'), 'post_date' => __('Post Date', '_s')]),
            Field::make('select', 'wprs_order', __('Order', '_s'))->set_options(['DESC', 'ASC']),
        ], 2);
    }

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

add_action('carbon_fields_post_meta_container_saved', function ($post_id, $container)
{
    wp_update_post([
        'ID'           => $post_id,
        'post_excerpt' => carbon_get_post_meta($post_id, 'wprs_header_description'),
    ]);

    update_post_meta($post_id, '_thumbnail_id', carbon_get_post_meta($post_id, 'wprs_thumbnail'));

}, 10, 2);