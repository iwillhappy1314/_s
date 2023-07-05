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


add_action('woocommerce_product_options_general_product_data', function () {
    woocommerce_wp_text_input([
        'id' => '_delivery_date',
        'label' => __('货期(天)', 'flashfox'),
    ]);

    woocommerce_wp_checkbox([
        'id' => '_allow_make_offer',
        'label' => __('允许议价', 'flashfox'),
        'description' => __('选中允许议价', 'flashfox'),
    ]);
});


add_action('woocommerce_process_product_meta', function ($post_id) {
    $product = wc_get_product($post_id);

    $product->update_meta_data('_delivery_date', sanitize_text_field($_POST['_delivery_date'] ?? ''));
    $product->update_meta_data('_allow_make_offer', sanitize_text_field($_POST['_allow_make_offer'] ?? ''));

    $product->save();
});