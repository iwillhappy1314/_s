<?php

/**
 * These functions can be replaced via plugins. If plugins do not redefine these
 * functions, then these will be used instead.
 *
 * @package _s
 */

add_shortcode('_s_elementor_block', '_s_render_elementor_block');
add_shortcode('_s_product_nav', '_s_render_product_nav');

if ( ! function_exists('_s_render_elementor_block')) {
    /**
     * 在任何地方渲染 elementor 模版
     *
     * @param $atts
     *
     * @return string
     */
    function _s_render_elementor_block($atts)
    {

        // Enable support for WPML & Polylang
        $language_support = apply_filters('ae_multilingual_support', false);

        if ( ! class_exists('Elementor\Plugin')) {
            return '';
        }
        if ( ! isset($atts[ 'id' ]) || empty($atts[ 'id' ])) {
            return '';
        }

        $post_id = $atts[ 'id' ];

        if ($language_support) {
            $post_id = apply_filters('wpml_object_id', $post_id, 'ae_global_templates');
        }

        return \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($post_id);
    }
}


if ( ! function_exists('_s_render_product_nav')) {
    function _s_render_product_nav($atts)
    {
        $parent = $atts[ 'parent' ];

        $terms = get_terms([
            'taxonomy'   => 'product_cat',
            'hide_empty' => false,
            'parent'     => (int)$parent,
        ]);

        $html = '<div class="container">';
        $html .= '<div class="rs-tabs">';

        $html .= '<ul class="flex flex-wrap lg:flex-nowrap space-between static w-full rs-tab__nav">';
        foreach ($terms as $term) {
            $html .= '<li class="flex-grow w-full text-center"><a href="#js-term-' . $term->term_id . '">' . $term->name . '</a></li>';
        }
        $html .= '</ul>';

        $html .= '<div class="rs-tab__contents">';

        foreach ($terms as $term) {
            $html .= '<div id="js-term-' . $term->term_id . '" class="rs-tab__content">';

            $terms_children = get_terms([
                'taxonomy'   => 'product_cat',
                'hide_empty' => true,
                'parent'     => $term->term_id,
            ]);

            if ($terms_children) {
                foreach (array_chunk($terms_children, 2) as $terms_children) {
                    $html .= '<div class="flex rs-product-nav -mx-4">';
                    foreach ($terms_children as $term_child) {
                        $html .= '<div class="w-full lg:w-1/2 rs-product-column">';
                        $html .= '<div class="mx-4">';
                        $html .= '<div class="mb-3 text-gray-600">' . $term_child->name . '</div>';

                        $args = [
                            'post_type'      => 'product',
                            'posts_per_page' => 4,
                            'tax_query'      => [
                                [
                                    'taxonomy' => 'product_cat',
                                    'field'    => 'ID',
                                    'terms'    => $term_child->term_id,
                                ],
                            ],
                        ];

                        $nav_query = new WP_Query($args);

                        $html .= '<div class="w-full flex -mx-2">';
                        if ($nav_query->have_posts()) {

                            while ($nav_query->have_posts()) {
                                $nav_query->the_post();
                                $html .= '<div class="w-1/2 lg:w-1/4">';
                                $html .= '<div class="mx-2">';
                                $html .= '<a class="rs-product-link" href="' . get_the_permalink() . '">';
                                $html .= get_the_post_thumbnail(get_the_ID(), 'product-thumbnail');
                                $html .= '<div class="mt-4">' . get_post_meta(get_the_id(), 'model_name', true) . '</div>';
                                $html .= '</a>';
                                $html .= '</div>';
                                $html .= '</div>';
                            }

                        }
                        $html .= '</div>';

                        $html .= '</div>';
                        $html .= '</div>';

                        wp_reset_postdata();
                    }

                    $html .= '</div>';
                }
            } else {
                $html .= '<div class="flex rs-product-nav -mx-4">';
                $html .= '<div class="w-full lg:w-1/2 rs-product-column">';
                $html .= '<div class="mx-4">';

                $args = [
                    'post_type'      => 'product',
                    'posts_per_page' => 4,
                    'tax_query'      => [
                        [
                            'taxonomy' => 'product_cat',
                            'field'    => 'ID',
                            'terms'    => $term->term_id,
                        ],
                    ],
                ];

                $nav_query = new WP_Query($args);

                $html .= '<div class="w-full flex flex-wrap lg:flex-nowrap -mx-2">';
                if ($nav_query->have_posts()) {

                    while ($nav_query->have_posts()) {
                        $nav_query->the_post();
                        $html .= '<div class="w-1/2 lg:w-1/4">';
                        $html .= '<div class="mx-2">';
                        $html .= '<a class="c-nav-prod" href="' . get_the_permalink() . '">';
                        $html .= get_the_post_thumbnail(get_the_ID(), 'product-thumbnail');
                        $html .= '<div class="mt-4">' . get_post_meta(get_the_id(), 'model_name', true) . '</div>';
                        $html .= '</a>';
                        $html .= '</div>';
                        $html .= '</div>';
                    }

                }
                $html .= '</div>';

                $html .= '</div>';
                $html .= '</div>';

                wp_reset_postdata();

                $html .= '</div>';
            }


            $html .= '<div class="rs-product-nav-addon py-2 flex flex-wrap lg:flex-nowrap">';
            $html .= '<a class="c-more" href="' . get_term_link($term) . '">More Products</a>';
            $html .= '<a class="c-more" href="' . home_url('comparison?term=' . $term->slug) . '">Product Comparison</a>';
            $html .= '<a class="c-more" href="' . home_url('solution-finder') . '">Solution Finder</a>';
            $html .= '</div>';

            $html .= '</div>';
        }

        $html .= '</div>';
        $html .= '</div>';

        return $html;
    }
}
