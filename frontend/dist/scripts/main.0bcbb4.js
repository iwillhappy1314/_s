(()=>{"use strict";var e,i,t,n;e=jQuery,i=document.getElementById("masthead"),t=document.getElementsByTagName("body")[0],n={init:function(){this.ajaxLoading(),this.smartMenu(),this.closeCartDrawer(),this.navTree(),this.stickySidebar(),this.accordion(),this.tab(),this.lazyYoutube()},ajaxLoading:function(){var i=e("#ajax-loading").hide();e(document).ajaxStart((function(){i.show()})).ajaxStop((function(){i.hide()}))},smartMenu:function(){e(".sm, .product-categories").smartmenus({showFunction:function(e,i){e.slideDown(100,i)},hideFunction:function(e,i){e.hide()},showTimeout:0,hideTimeout:100})},stickySidebar:function(){e(document).width()>1024&&e(".js-sticky-left, .js-sticky-right").theiaStickySidebar({additionalMarginTop:32})},accordion:function(){e(".rs-accordion > li > .rs-accordion__content").hide(),e(".rs-accordion > li").click((function(){return e(this).hasClass("active")?e(this).removeClass("active").find(".rs-accordion__content").slideUp():(e(".rs-accordion > li.active .rs-accordion__content").slideUp(),e(".rs-accordion > li.active").removeClass("active"),e(this).addClass("active").find(".rs-accordion__content").slideDown()),!1}))},tab:function(){e(".rs-tab__nav li:first-child").addClass("active"),e(".rs-tab__content").hide(),e(".rs-tab__contents").find(".rs-tab__content:first").show(),e(".rs-tab__nav li").click((function(){e(".rs-tab__nav li").removeClass("active"),e(this).addClass("active"),e(".rs-tab__content").hide();var i=e(this).find("a").attr("href");return e(i).fadeIn(),!1}))},lazyYoutube:function(){e(".js-lazyYT").lazyYT({youtube_parameters:"rel=0",loading_text:"Loading...",display_title:!1,default_ratio:"16:9",display_duration:!1,video_loaded_class:"lazyYT-video-loaded",container_class:"lazyYT-container"})},navSticky:function(){var e=i.offsetTop+100;window.scrollY>e?(i.classList.add("is-sticky"),t.classList.add("is-sticky")):(i.classList.remove("is-sticky"),t.classList.remove("is-sticky"))},closeCartDrawer:function(){e(".close-drawer").on("click",(function(){e("body").removeClass("mobile-toggled").removeClass("drawer-open")}))},navTree:function(){var i=e(".widget_nav_menu, .widget_product_categories, .widget-nav_menu");i.length>0&&i.each((function(){var i=e(this),t=i.attr("data-speed"),n=i.attr("data-easing"),a=i.find("ul li.current_page_parent .children, ul > li.current_page_item .children, ul > li.current-menu-item .children,  ul > li.current-menu-parent .children, ul > li.current-cat-parent .children, ul > li.current-cat.cat-parent .children"),r=i.find("ul li.current_page_parent .sub-menu, ul > li.current_page_item .sub-menu, ul > li.current-menu-item .sub-menu, ul > li.current-menu-parent .sub-menu, ul > li.current-cat-parent .sub-menu, ul > li.current-cat.cat-parent .sub-menu");t||(t=250),n||(n="swing"),i.find("ul li:has(ul)").addClass("sub-menu"),i.find("ul li:has(ul) > a").append('<span class="icon"><i class="wpion-angle-down"></i></span>'),i.find("ul li.current_page_ancestor, ul li.current_page_parent, ul > li.current_page_item, ul > li.current-menu-parent, ul > li.current-cat-parent").addClass("active"),a.slideDown(Number(t),n),r.slideDown(Number(t),n),i.find("ul > li.current-menu-item").parent().parent().slideDown(Number(t),n),i.find("ul > li.current-menu-item").parent().parent("li").addClass("active"),i.find("ul > li.current-cat").parent().parent("li").addClass("active"),i.hasClass("on-hover")?i.find("ul li:has(ul):not(.active)").hover((function(){e(this).children("ul").stop(!0,!0).slideDown(Number(t),n)}),(function(){e(this).children("ul").delay(250).slideUp(Number(t),n)})):i.find("ul li:has(ul) > a .icon").click((function(a){var r=e(this).parent();i.find("ul li").not(r.parents()).removeClass("active"),r.parent().children("ul").slideToggle(Number(t),n,(function(){e(this).find("ul").hide(),e(this).find("li.active").removeClass("active")})),i.find("ul li > ul").not(r.parent().children("ul")).not(r.parents("ul")).slideUp(Number(t),n),r.parent("li:has(ul)").toggleClass("active"),a.preventDefault()}))}))}},e(document).ready((function(){n.init()})),window.onscroll=function(){n.navSticky()}})();