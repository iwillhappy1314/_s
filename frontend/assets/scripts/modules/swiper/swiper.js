import Swiper, {Navigation, Pagination, Thumbs, FreeMode, Controller} from 'swiper';

jQuery(document).ready(function($) {
    //Slider Animated Caption
    var swiper = new Swiper('.rs-swiper-container', {
      navigation         : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination         : {
        el            : '.swiper-pagination',
        dynamicBullets: true,
      },
      paginationClickable: true,
      nextButton         : '.swiper-button-next',
      prevButton         : '.swiper-button-prev',
      spaceBetween       : 0,
      loop               : true,
      simulateTouch      : true,
      autoplay           : 5000,
      speed              : 500,
    });

    swiper.on('slideChangeTransitionStart', function() {
      $('.rs-swiper-container').find('.slider-wrapper').hide();
    });

    swiper.on('slideChangeTransitionEnd', function() {
      $('.rs-swiper-container').find('.slider-wrapper').show();
    });

    function bindSwipers(...swiperList) {
        for (const swiper of swiperList) {
            swiper.slideTo = function(index, speed, runCallbacks, doNotPropagate) {
                if (doNotPropagate) {
                    Swiper.prototype.slideTo.apply(this, arguments);
                } else {
                    for (const swiper of swiperList) {
                        swiper.slideTo(index, speed, runCallbacks, true);
                    }
                }
            };
        }
    }

    function thumnailSwiper() {
        var yearSwiper = new Swiper('.year-swiper', {
            modules            : [Navigation, Pagination, FreeMode, Thumbs, Controller],
            spaceBetween       : 15,
            slidesPerView      : 2,
            slidesPerGroup     : 1,
            freeMode           : true,
            noSwiping          : true,
            watchSlidesProgress: true,
            //preventInteractionOnTransition: true,
            //centeredSlides      : true,
            //centeredSlidesBounds: true,
            breakpoints: {
                640 : {
                    slidesPerView: 2,
                    spaceBetween : 20,
                },
                768 : {
                    slidesPerView: 3,
                    spaceBetween : 30,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween : 30,
                },
            },
            navigation : {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        const historySwiper = new Swiper('.history-swiper', {
            modules : [Navigation, Pagination, FreeMode, Thumbs, Controller],
            loop    : false,
            autoplay: {
                delay: 5000,
            },
            thumbs  : {
                swiper: yearSwiper,
            },
        });

        bindSwipers(historySwiper, yearSwiper);
    }

});
