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

    add_action('wprs_before_term_options', function ($prefix)
    {
        $col_options = [
            '1' => __('1 Col', 'wenprise-content-components'),
            '2' => __('2 Col', 'wenprise-content-components'),
            '3' => __('3 Col', 'wenprise-content-components'),
            '4' => __('4 Col', 'wenprise-content-components'),
            '5' => __('5 Col', 'wenprise-content-components'),
            '6' => __('6 Col', 'wenprise-content-components'),
        ];

        \CSF::createSection($prefix, [
            'fields' => [
                [
                    'id'      => '_wprs_loop_layout',
                    'type'    => 'button_set',
                    'title'   => __('Page Content Layout', 'wenprise-content-components'),
                    'options' => [
                        ''     => __('Default', 'wenprise-content-components'),
                        'grid' => __('Grid', 'wenprise-content-components'),
                        'list' => __('List', 'wenprise-content-components'),
                    ],
                ],
                [
                    'id'      => '_wprs_gird_cols',
                    'type'    => 'select',
                    'title'   => __('Cols', 'wenprise-content-components'),
                    'options' => $col_options,
                    'default' => 1,
                ],
                [
                    'id'      => '_wprs_gird_cols_md',
                    'type'    => 'select',
                    'title'   => __('Col in Tablet', 'wenprise-content-components'),
                    'options' => $col_options,
                    'default' => 1,
                ],
                [
                    'id'      => '_wprs_gird_cols_sm',
                    'type'    => 'select',
                    'title'   => __('Cols in mobile', 'wenprise-content-components'),
                    'options' => $col_options,
                    'default' => 1,
                ],
            ],
        ]);
    });


    add_action('wprs_after_site_options', function ($prefix)
    {
        \CSF::createSection($prefix, [
            'title'  => __('图像设置', 'wenprise-content-components'),
            'fields' => [
                [
                    'id'    => '_wprs_default_thumbnail',
                    'type'  => 'media',
                    'title' => __('默认文章图像', 'wenprise-content-components'),
                ],
                [
                    'id'    => '_wprs_default_banner',
                    'type'  => 'media',
                    'title' => __('默认Banner图像', 'wenprise-content-components'),
                ],
            ],
        ]);
    });


    add_action('wprs_after_header_options', function ($prefix)
    {
        \CSF::createSection($prefix, [
            'title'  => __('页脚设置', 'wenprise-content-components'),
            'fields' => [
                [
                    'id'    => 'enable_go_to_top',
                    'type'  => 'checkbox',
                    'title' => __('Enable go to top button', 'wenprise-content-components'),
                ],
            ],
        ]);
    });

    add_filter('wprs_site_header_options', function ($options)
    {
        $options[] = [
            'id'      => 'mobile_nav_style',
            'type'    => 'select',
            'title'   => __('Enable Sticky Header', 'wenprise-content-components'),
            'default' => 'dropdown',
            'options' => [
                'dropdown'   => __('Dropdown', 'wenprise-content-components'),
                'off-canvas' => __('Off Canvas', 'wenprise-content-components'),
            ],
        ];

        return $options;
    });
}