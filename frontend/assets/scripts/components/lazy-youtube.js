require('script-loader!../plugins/lazyYT');

function lazyYoutube() {

    if ($.isFunction($.fn.lazyYT)) {
        $('.js-lazyYT').lazyYT({
            youtube_parameters: 'rel=0',
            loading_text      : 'Loading...',
            display_title     : false,
            default_ratio     : '16:9',
            display_duration  : false,
            video_loaded_class: 'lazyYT-video-loaded',
            container_class   : 'lazyYT-container',
        });
    }

    // 给 iframe 添加 wrap, 以实现自适应
    $('.type-docs iframe').wrap('<div class="rs-iframe-wrap" />');

}

export {lazyYoutube};
