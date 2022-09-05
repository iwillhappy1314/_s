import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default function Tooltip() {

    tippy('[data-tippy-content]', {
        arrow    : true,
        animation: 'fade',
    });

}
