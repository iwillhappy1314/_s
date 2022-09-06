import 'magnific-popup';
import 'magnific-popup/src/css/main.scss';

if ($('.rs-popup-image').length > 0) {
    $('.rs-popup-image').magnificPopup({
        type: 'image',
    });
}

if ($('.rs-popup-video').length > 0) {
    $('.rs-popup-video').magnificPopup({
        disableOn      : 700,
        type           : 'iframe',
        mainClass      : 'mfp-fade',
        removalDelay   : 160,
        preloader      : false,
        fixedContentPos: false,
    });
}
