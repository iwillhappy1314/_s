let mix = require('laravel-mix');
let webpack = require('webpack');

require('laravel-mix-tailwind');
require('laravel-mix-versionhash');
require('laravel-mix-copy-watched');
require('mix-white-sass-icons');

mix.setPublicPath('./');

mix.webpackConfig({
    externals: {
        jquery: 'jQuery',
    },
    plugins  : [
        new webpack.ProvidePlugin({
            $              : 'jquery',
            jQuery         : 'jquery',
            'window.jQuery': 'jquery',
        })],
});

mix.sass('assets/styles/main.scss', 'dist/styles').
    sass('assets/styles/account.scss', 'dist/styles').
    sass('assets/styles/cart.scss', 'dist/styles').
    sass('assets/styles/checkout.scss', 'dist/styles').
    sass('assets/styles/editor.scss', 'dist/styles').
    sass('assets/styles/iconfont.scss', 'dist/styles').
    sass('assets/styles/post.scss', 'dist/styles').
    sass('assets/styles/products.scss', 'dist/styles').
    sass('assets/styles/review.scss', 'dist/styles').
    sass('assets/styles/woocommerce.scss', 'dist/styles').
    sass('assets/styles/admin.scss', 'dist/styles').
    tailwind().
    options({
        postCss: [
            require('css-mqpacker'),
        ],
    });

mix.js('assets/scripts/main.js', 'dist/scripts').
    js('assets/scripts/customizer.js', 'dist/scripts').
    js('assets/scripts/woocommerce.js', 'dist/scripts');

mix.js('assets/scripts/modules/bootstrap.js', 'static/js').
    js('assets/scripts/modules/dropdown.js', 'static/js').
    js('assets/scripts/modules/popover.js', 'static/js').
    js('assets/scripts/modules/tooltip.js', 'static/js').
    js('assets/scripts/modules/lazy-youtube/lazy-youtube.js', 'static/js').
    js('assets/scripts/modules/sticky-sidebar.js', 'static/js').
    js('assets/scripts/modules/nav-tree.js', 'static/js').
    js('assets/scripts/modules/magnific-popup.js', 'static/js').
    js('assets/scripts/modules/accordion/accordion.js', 'static/js').
    js('assets/scripts/modules/meanmenu/meanmenu.js', 'static/js').
    js('assets/scripts/modules/swiper/swiper.js', 'static/js').
    js('assets/scripts/modules/wow/wow.js', 'static/js').
    js('assets/scripts/modules/isotope.js', 'static/js');

mix.copyWatched('assets/images', 'dist/images').
    copyWatched('assets/fonts', 'dist/fonts');

if (mix.inProduction()) {
    //mix.versionHash();
    mix.icons('assets/icons', 'assets/fonts', 'assets/styles/icons.scss');
} else {
    mix.sourceMaps();
    mix.webpackConfig({devtool: 'source-map'});
}

mix.browserSync({
    proxy         : 's.as',
    files         : [
        {
            match  : [
                './dist/**/*',
                '../**/*.php',
            ],
            options: {
                ignored: '*.txt',
            },
        },
    ],
    snippetOptions: {
        whitelist: ['/wp-admin/admin-ajax.php'],
        blacklist: ['/wp-admin/**'],
    },
});
