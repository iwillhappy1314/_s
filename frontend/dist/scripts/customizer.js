!function(o){wp.customize("blogname",(function(t){t.bind((function(t){o(".site-title a").text(t)}))})),wp.customize("blogdescription",(function(t){t.bind((function(t){o(".site-description").text(t)}))})),wp.customize("header_textcolor",(function(t){t.bind((function(t){"blank"===t?o(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):(o(".site-title, .site-description").css({clip:"auto",position:"relative"}),o(".site-title a, .site-description").css({color:t}))}))})),wp.customize("rs_container_width",(function(t){t.bind((function(t){o(".container").css({"max-width":t+"px"})}))})),wp.customize("rs_container_focus_width",(function(t){t.bind((function(t){o(".container--focus, .single-post.sidebar-none .site__main, .category.sidebar-none .site__main").css({"max-width":t+"px"})}))})),wp.customize("rswc_single_product_content_width",(function(t){t.bind((function(t){o(".rswc-product-body").css({"max-width":t+"px"})}))})),wp.customize("rswc_single_product_gallery_columns",(function(t){t.bind((function(t){o(".woocommerce-product-gallery").removeClass("woocommerce-product-gallery--columns-3").removeClass("woocommerce-product-gallery--columns-4").removeClass("woocommerce-product-gallery--columns-5").removeClass("woocommerce-product-gallery--columns-6").addClass("woocommerce-product-gallery--columns-"+t)}))}))}(jQuery);