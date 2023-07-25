<?php

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