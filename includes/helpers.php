<?php

/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package _s
 */


if ( ! function_exists('_s_assets')) {
    /**
     * 获取前端资源
     *
     * @param $path               string 文件名
     * @param $manifest_directory string 文件名
     *
     * @return string 文件路径
     */
    function _s_assets(string $path, string $manifest_directory = 'frontend'): string
    {
        static $manifest;
        static $manifest_path;

        if ( ! $manifest_path) {
            $manifest_path = get_theme_file_path($manifest_directory . '/mix-manifest.json');
        }

        // Bailout if manifest could not be found
        if ( ! file_exists($manifest_path)) {
            return get_theme_file_uri($path);
        }

        if ( ! $manifest) {
            // @codingStandardsIgnoreLine
            $manifest = json_decode(file_get_contents($manifest_path), true);
        }

        // Remove manifest directory from path
        $path = str_replace($manifest_directory, '', $path);
        // Make sure there’s a leading slash
        $path = '/' . ltrim($path, '/');

        // Bailout with default theme path if file could not be found in manifest
        if ( ! array_key_exists($path, $manifest)) {
            return get_theme_file_uri($path);
        }

        // Get file URL from manifest file
        $path = $manifest[ $path ];
        // Make sure there’s no leading slash
        $path = ltrim($path, '/');

        return get_theme_file_uri(trailingslashit($manifest_directory) . $path);
    }
}


if ( ! function_exists('_s_has_shortcode')) {


    function _s_has_shortcode($post): bool
    {
        /*
         * Default false
         */
        $found = false;

        /*
         * If shortcode exists in content, return true
         */
        if (stripos($post->post_content, '[') !== false) {
            $found = true;
        }

        return $found;
    }
}


if ( ! function_exists('_s_has_shortcode')) {
    /**
     * @param $video_url
     *
     * @return mixed
     */
    function _s_get_video_id($video_url)
    {
        $url_components = parse_url($video_url);
        parse_str($url_components[ 'query' ], $params);

        if (isset($params[ 'v' ])) {
            return $params[ 'v' ];
        }

        return substr($url_components[ 'path' ], 1);
    }
}


/**
 * @param $video_url
 *
 * @return mixed
 */
function _s_get_video_id_from_url($video_url)
{
    $url_components = parse_url($video_url);
    parse_str($url_components[ 'query' ], $params);

    if (isset($params[ 'v' ])) {
        return $params[ 'v' ];
    }

    return substr($url_components[ 'path' ], 1);
}


/**
 * 获取 YouTube Embed
 *
 * @param $video_url
 * @param $is_mobile
 *
 * @return string
 */
function _s_get_embed_vide_url($video_url, $is_mobile): string
{
    if ($is_mobile) {
        return 'https://www.youtube.com/embed/' . _s_get_video_id_from_url($video_url);
    }

    return 'https://www.youtube.com/embed/watch?v=' . _s_get_video_id_from_url($video_url);
}