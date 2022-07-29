function isotope(){
    if ($(".js-gallery-items").length > 0) {

        var jQuerygrid = $(".gallery-items").isotope({
            singleMode: true,
            columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
            itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
            resizable: true,
            transformsEnabled: true,
            transitionDuration: "700ms"
        });

        jQuerygrid.imagesLoaded(function () {
            jQuerygrid.isotope("layout");
        });

        $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
            b.preventDefault();
            var c = $(this).attr("data-filter");
            jQuerygrid.isotope({
                filter: c
            });
            $(".gallery-filters a").removeClass("gallery-filter-active");
            $(this).addClass("gallery-filter-active");
        });

    }
}

export {isotope};
