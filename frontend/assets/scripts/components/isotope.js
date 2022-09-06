var loadjs = require('loadjs');

if ($('.js-gallery-items').length > 0) {

    loadjs([wenpriseSettings.staticPath + 'js/imagesloaded.pkgd.min.js', wenpriseSettings.staticPath + 'js/isotope.pkgd.min.js'], 'isotope');

    loadjs.ready('isotope', function() {
        var jQuerygrid = $('.gallery-items').isotope({
            singleMode        : true,
            columnWidth       : '.grid-sizer, .grid-sizer-second, .grid-sizer-three',
            itemSelector      : '.gallery-item, .gallery-item-second, .gallery-item-three',
            resizable         : true,
            transformsEnabled : true,
            transitionDuration: '700ms',
        });

        jQuerygrid.imagesLoaded(function() {
            jQuerygrid.isotope('layout');
        });

        $('.gallery-filters').on('click', 'a.gallery-filter', function(b) {
            b.preventDefault();
            var c = $(this).attr('data-filter');
            jQuerygrid.isotope({
                filter: c,
            });
            $('.gallery-filters a').removeClass('gallery-filter-active');
            $(this).addClass('gallery-filter-active');
        });

        $('.gallery-container').imagesLoaded(function() {

            $('.gallery-container').isotope({
                itemSelector: '.filtr-item',
                layoutMode  : 'fitRows',
            });

            $('ul.simplefilter li').on('click', function() {
                $('ul.simplefilter li').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');

                $('.gallery-container').isotope({
                    filter          : selector,
                    animationOptions: {
                        duration: 750,
                        easing  : 'linear',
                        queue   : false,
                    },
                });

                return false;
            });
        });
    });
}
