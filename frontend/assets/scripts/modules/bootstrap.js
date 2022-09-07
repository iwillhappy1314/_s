'use strict';

import Dropdown from 'bootstrap/js/dist/dropdown';
import Tab from 'bootstrap/js/dist/tab';

const dropdownElementList = document.querySelectorAll('.rs-dropdown-toggle');

[...dropdownElementList].map(function(dropdownToggleEl) {
    new Dropdown(dropdownToggleEl);
});

const popoverElementList = document.querySelectorAll('.rs-popover');

[...popoverElementList].map(function(popoverEl) {
    new Popover(popoverEl);
});
