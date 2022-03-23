let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-versionhash');

mix.setPublicPath('./');

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
    tailwind();

mix.js('assets/scripts/vendors.js', 'dist/scripts').
    js('assets/scripts/main.js', 'dist/scripts').
    js('assets/scripts/customizer.js', 'dist/scripts').
    js('assets/scripts/woocommerce.js', 'dist/scripts');

mix.copy('assets/images', 'dist/images').
    copy('assets/fonts', 'dist/fonts');

if (mix.inProduction()) {
    mix.versionHash();
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
