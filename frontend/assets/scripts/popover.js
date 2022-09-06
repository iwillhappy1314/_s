'use strict';

import Popover from 'bootstrap/js/dist/popover';

const popoverElementList = document.querySelectorAll('.rs-popover');

[...popoverElementList].map(function(popoverEl) {
    new Popover(popoverEl);
});
