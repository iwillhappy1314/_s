const purgecssWhiteList = require('@wenprise/purgecss-with-wordpress');

module.exports = {
    content : [
        '../frontend/assets/scripts/**/*.js',
        '../bbpress/**/*.php',
        '../includes/**/*.php',
        '../related-post-plugin/**/*.php',
        '../src/**/*.php',
        '../wenprise/**/*.php',
        '../templates/**/*.php',
        '../template-parts/**/*.php',
        '../woocommerce/**/*.php',
        '../functions.php',
        '../header.php',
        '../footer.php',
        '../index.php',
        '../home.php',
        '../archive.php',
        '../author.php',
        '../search.php',
        '../sidebar.php',
        '../page.php',
        '../single.php',
        '../comments.php',
        '../404.php',
    ],
    safelist: purgecssWhiteList.whitelist.concat([
        'ln-letters',
        'letterCountShow',
        'mr-1',
        'mr-2',
        'mb-2',
        'mb-6',
        'mb-4',
        'py-16',
        'block',
        'flex',
        'inline-block',
        'items-center',
        'justify-center',
        'text-primary',
        {
            pattern: /bg-(red|green|blue)-(100|200|300)|rs-.+|flex-*|mr-2/,
        },
    ]),
    theme   : {
        container: {
            screens: {
                minsm: { min: '640px' },
                minmd: { min: '768px' },
                minlg: { min: '1024px' },
                minxl: { min: '1280px' },
                min2xl: { min: '1360px' },
            },
        },
        extend   : {
            colors: {
                primary  : '#e50011',
                secondary: '#9e7b07',
                gray     : {
                    '100': '#f5f5f5',
                    '200': '#eee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins : [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
