<?php
/**
 * @package _s
 */

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

add_action('after_setup_theme', '_s_setup');
add_action('widgets_init', '_s_widgets_init');
add_action('init', '_s_elementor_widgets_init');

if ( ! function_exists('_s_setup')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function _s_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on _s, use a find and replace
         * to change '_s' to the name of your theme in all the template files.
         */
        load_theme_textdomain('_s', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');
        add_image_size('index-thumbnail', 400, 300, true);
        add_image_size('product-thumbnail', 800, 800, true);

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus([
            'menu-primary' => esc_html__('Primary Menu', '_s'),
            'menu-footer' => esc_html__('Footer Menu', '_s'),
        ]);

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', [
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ]);

        add_theme_support('custom-logo', [
            'height'      => 101,
            'width'       => 120,
            'flex-height' => true,
            'flex-width'  => true,
            'header-text' => ['site-title', 'site-description'],
        ]);

        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('_s_custom_background_args', [
            'default-color' => 'ffffff',
            'default-image' => '',
        ]));

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support('custom-logo', [
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        ]);

        $GLOBALS[ 'content_width' ] = apply_filters('_s_content_width', 640);

        // WenpriseContentTypes\ContentType::register("video", __("Videos", '_s'), false, true, false, 'dashicons-video-alt2');
        // WenpriseContentTypes\Taxonomy::register("video_type", 'video', __("Video Tags", '_s'), true, true);
    }
endif;


add_filter('wenprise_post_type_supports', function ($types)
{
    $types[] = 'news';

    return $types;
});

add_filter('wenprise_taxonomies_supports', function ($taxonomies)
{
    $taxonomies[] = 'news-cat';

    return $taxonomies;
});


add_filter('manage_elementor_library_posts_columns', function ($columns)
{
    $columns[ 'shortcode' ] = __('Shortcode', '_s');

    return $columns;
});

add_action('manage_elementor_library_posts_custom_column', function ($column, $post_id)
{
    if ('shortcode' === $column) {
        echo '<input style="min-width: 256px;" type="text" readonly="" onfocus="this.select()" value="[_s_elementor_block id=' . $post_id . ']"><br/>';
    }
}, 10, 2);


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
if ( ! function_exists('_s_widgets_init')) {
    function _s_widgets_init()
    {
        register_sidebar([
            'name'          => esc_html__('Primary Widgets Area', '_s'),
            'id'            => 'sidebar-primary',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);
        register_sidebar([
            'name'          => esc_html__('Top bar Widgets', '_s'),
            'id'            => 'sidebar-top-bar',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);
        register_sidebar([
            'name'          => esc_html__('Footer Widgets Area', '_s'),
            'id'            => 'sidebar-footer',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);
        register_sidebar([
            'name'          => esc_html__('Copyright Widgets Area', '_s'),
            'id'            => 'sidebar-copyright',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);
    }
}


if ( ! function_exists('_s_elementor_widgets_init')) {
    function _s_elementor_widgets_init()
    {
        if (defined('ELEMENTOR_PATH') && class_exists('Elementor\Widget_Base')) {

            $elementor_instance = \Elementor\Plugin::instance();

            $elementor_instance->elements_manager->add_category(
                'wenprise-addons',
                [
                    'title' => __('Foreign Language Press Addon', 'mld'),
                    'icon'  => 'fa fa-plug',
                ]
            );

            $elementor_instance->widgets_manager->register(new \SpaceName\Elementor\Widgets\ServiceWidgets());

        }
    }
}


/**
 * 设置主题更新
 */
$theme_update_checker = PucFactory::buildUpdateChecker(
    'https://api.wpcio.com/api/theme/info/_s',
    get_parent_theme_file_path('functions.php'),
    '_s'
);