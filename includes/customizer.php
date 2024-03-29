<?php
/**
 * _s Theme Customizer
 *
 * @package _s
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function _s_customize_register($wp_customize)
{
    $wp_customize->get_setting('blogname')->transport         = 'postMessage';
    $wp_customize->get_setting('blogdescription')->transport  = 'postMessage';
    $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

    /**
     * Combine colors and background to same section
     */
    $wp_customize->remove_section('background_image');
    $wp_customize->remove_section('title');
    $wp_customize->remove_section('header_image');
    $wp_customize->remove_section('static_front_page');
    $wp_customize->remove_section('colors_background');
    $wp_customize->remove_section('colors');

    $wp_customize->remove_panel('wpuf_panel');

    $wp_customize->add_section('colors_background', [
        'priority' => 25,
        'title'    => __('Colors and Background', '_s'),
    ]);

    // $wp_customize->get_control('header_textcolor')->section = 'colors_background';
    // $wp_customize->get_control('background_color')->section = 'colors_background';
    // $wp_customize->get_control('background_image')->section = 'colors_background';

    /**
     * Add partial refresh call back
     */
    if (isset($wp_customize->selective_refresh)) {
        $wp_customize->selective_refresh->add_partial('blogname', [
            'selector'        => '.site-title a',
            'render_callback' => '_s_customize_partial_blogname',
        ]);
        $wp_customize->selective_refresh->add_partial('blogdescription', [
            'selector'        => '.site-description',
            'render_callback' => '_s_customize_partial_blogdescription',
        ]);
    }
}

add_action('customize_register', '_s_customize_register');

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function _s_customize_partial_blogname()
{
    bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function _s_customize_partial_blogdescription()
{
    bloginfo('description');
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _s_customize_preview_js()
{
    wp_enqueue_script('_s-customizer', _s_assets('frontend/dist/scripts/customizer.js'), ['customize-preview'], '20151215', true);
}

add_action('customize_preview_init', '_s_customize_preview_js');

/**
 * Set up the WordPress core custom header feature.
 *
 * @uses _s_header_style()
 */
function _s_custom_header_setup()
{
    add_theme_support('custom-header', apply_filters('_s_custom_header_args', [
        'default-image'      => '',
        'default-text-color' => '000000',
        'width'              => 1000,
        'height'             => 250,
        'flex-height'        => true,
        'wp-head-callback'   => '_s_header_style',
    ]));
}

add_action('after_setup_theme', '_s_custom_header_setup');

if ( ! function_exists('_s_header_style')) :
    /**
     * Styles the header image and text displayed on the blog.
     *
     * @see _s_custom_header_setup().
     */
    function _s_header_style()
    {
        $header_text_color = get_header_textcolor();

        /*
         * If no custom options for text are set, let's bail.
         * get_header_textcolor() options: Any hex value, 'blank' to hide text. Default: add_theme_support( 'custom-header' ).
         */
        if (get_theme_support('custom-header', 'default-text-color') === $header_text_color) {
            return;
        }

        // If we get this far, we have custom styles. Let's do this.
        ?>
        <style>
            <?php
            // Has the text been hidden?
            if ( ! display_header_text() ) :
                ?>
            .site-title,
            .site-description {
                position: absolute;
                clip: rect(1px, 1px, 1px, 1px);
            }

            <?php
            // If the user has set a custom color for the text use that.
            else :
                ?>
            .site-title a,
            .site-description {
                color: #<?php echo esc_attr( $header_text_color ); ?>;
            }

            <?php endif; ?>
        </style>
        <?php
    }
endif;