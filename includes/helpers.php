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


/**
 * 获取指定值的默认值
 *
 * @param mixed $value
 *
 * @return mixed
 */
if ( ! function_exists('_s_data_value')) {
    function _s_data_value($value)
    {
        return $value instanceof \Closure ? $value() : $value;
    }
}


/**
 * 使用点注释获取数据
 *
 * @param array|bool  $array
 * @param string|null $key
 * @param mixed       $default
 *
 * @return mixed
 */
if ( ! function_exists('_s_data_get')) {
    function _s_data_get($array, ?string $key = null, $default = null)
    {
        if (is_null($key)) {
            return $array;
        }

        $array = (array)$array;

        if (isset($array[ $key ])) {
            return $array[ $key ];
        }

        foreach (explode('.', $key) as $segment) {
            if ( ! is_array($array) || ! array_key_exists($segment, $array)) {
                return _s_data_value($default);
            }

            $array = $array[ $segment ];
        }

        return $array;
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


if ( ! function_exists('_s_get_current_language')) {
    /**
     * 获取 translatepress 环境下的当前语言
     *
     * @return string
     */
    function _s_get_current_language(): string
    {
        if (class_exists('TRP_Translate_Press')) {
            $trp              = TRP_Translate_Press::get_trp_instance();
            $url_converter    = $trp->get_component('url_converter');
            $current_language = $url_converter->get_lang_from_url_string(wprs_get_current_url());
        } else {
            $current_language = 'zh_CN';
        }

        return $current_language;
    }
}