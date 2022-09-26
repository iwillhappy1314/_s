<?php

/**
 * 文章类型、分类方法、存档设置、站点设置等自定义字段
 *
 * @package _s
 */

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


// add_filter('wprs_page_content_fields', function ($fields)
// {
//
//     $product_fields = \Nette\Neon\Neon::decode(file_get_contents(get_theme_file_path('config/fields/product.neon')));
//
//     if (\WenpriseContentComponents\Helpers::get_editor_post_type() == 'product') {
//         $fields = $fields + $product_fields;
//     }
//
//     return $fields;
//
// });