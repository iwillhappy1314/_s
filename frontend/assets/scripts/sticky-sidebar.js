require('script-loader!theia-sticky-sidebar');

if ($(document).width() > 1024 && $.isFunction($.fn.theiaStickySidebar)) {
    $('.js-sticky-left, .js-sticky-right').theiaStickySidebar({
        additionalMarginTop: 32,
    });
}
