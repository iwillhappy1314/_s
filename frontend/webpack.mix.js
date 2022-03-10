let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.sass('assets/styles/main.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/account.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/cart.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/checkout.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/editor.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/iconfont.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/post.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/products.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/review.scss', 'dist/styles').tailwind();
mix.sass('assets/styles/woocommerce.scss', 'dist/styles').tailwind();

mix.js('assets/scripts/main.js', 'dist/scripts');
mix.js('assets/scripts/customizer.js', 'dist/scripts');
mix.js('assets/scripts/woocommerce.js', 'dist/scripts');

mix.copy('assets/images', 'dist/images');

mix.copy('assets/fonts', 'dist/fonts');

mix.minify('dist/scripts/main.js');
mix.minify('dist/styles/main.css');

mix.browserSync({
    proxy: "s.as",
    files: [
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
