'use strict';



const popoverElementList = document.querySelectorAll('.rs-popover');

[...popoverElementList].map(function(popoverEl) {
    new Popover(popoverEl);
});
