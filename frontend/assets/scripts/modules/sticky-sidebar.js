require('script-loader!theia-sticky-sidebar');

if ($(document).width() > 1024) {
    $('.js-sticky-left, .js-sticky-right').theiaStickySidebar({
        additionalMarginTop: 32,
    });
}
