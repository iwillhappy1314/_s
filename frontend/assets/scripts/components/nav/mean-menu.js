require('script-loader!smartmenus');

function meanMenu() {
    $('.f-mean-menu').meanmenu({
        meanMenuOpen     : '<span class="icon-bars2"></span>',
        meanMenuClose    : '<span class="icon-x"></span>',
        meanMenuContainer: '.f-mean-nav',
        meanScreenWidth  : '768',
    });
}

export {meanMenu};
