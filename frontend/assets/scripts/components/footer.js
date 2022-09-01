import {isMobile} from 'is-mobile';

export default function footerNav() {

    if (isMobile) {
        $('.footer-widget-area .widget-title').click(function() {
            $(this).next().slideToggle();
        });
    }

}
