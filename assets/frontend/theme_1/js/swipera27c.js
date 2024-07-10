var swiper = new Swiper('.mySwiper', {


    navigation: {
        nextEl: '.slider .swiper-button-next',
        prevEl: '.slider .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    updateOnImagesReady: true,
    // lazyLoading: false,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 800,
    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    breakpoints: {
        // 1460: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 476,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //     },
        // },
        // 1220: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 180,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //
        //     },
        // },
        // 1024: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 180,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //
        //     },
        // },
        //
        //
        // 480: {
        //     effect: 'fade in',
        //     coverflowEffect:false,
        //     touchMove: true,
        //     speed: 500,
        //     navigation: true,
        //
        // }
    }
});
var instruct_slide = new Swiper('.swiper-instruct', {
    autoplay: false,
    pagination: {
        el: '.instruct-slide .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-instruct .swiper-button-next',
        prevEl: '.swiper-instruct .swiper-button-next',
    },
    updateOnImagesReady: true,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    centeredSlides: false,
    slidesPerView: 1,
    speed: 600,
    delay: 5000,

    loop: "false",


    // spaceBetween: 56,
    freeMode: false,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    observer: true,
    observeParents: true,
    keyboard: {
        enabled: true,
    },
    // breakpoints: {
    //
    //     992: {
    //         slidesPerView: 3,
    //     },
    //
    //
    //     480: {
    //         slidesPerView: 1.5,
    //
    //     }
    // }
});
var instruct_mb_slide = new Swiper('.swiper-instruct-mb', {
    autoplay: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-instruct-mb .navigation.swiper-button-next',
        prevEl: '.swiper-instruct-mb .navigation.swiper-button-next',
    },
    updateOnImagesReady: true,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    centeredSlides: false,
    slidesPerView: 1,
    speed: 600,
    delay: 5000,

    loop: "false",


    // spaceBetween: 56,
    freeMode: false,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    observer: true,
    observeParents: true,
    keyboard: {
        enabled: true,
    },
    // breakpoints: {
    //
    //     992: {
    //         slidesPerView: 3,
    //     },
    //
    //
    //     480: {
    //         slidesPerView: 1.5,
    //
    //     }
    // }
});
var slider_charge_card_amount = new Swiper(".slider--charge--card__amount", {
    slidesPerView: 2.5,
    spaceBetween: 8,
    freeMode: true,
    observer: true,
    observeParents: true,
});

var swiper2 = new Swiper('.item_play_dif_slide_detail', {

    navigation: {
        nextEl: '.item_play_dif_slide .swiper-button-next',
        prevEl: '.item_play_dif_slide .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    updateOnImagesReady: true,
    // lazyLoading: false,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    // watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: false,
    centeredSlides: false,
    slidesPerView: 4,
    speed: 800,
    spaceBetween: 12,


    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    // slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    breakpoints: {
        // 1460: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 476,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //     },
        // },
        // 1220: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 180,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //
        //     },
        // },
        992: {
            slidesPerView: 3,
        },


        480: {
            slidesPerView: 2,

        }
    }
});

var swiperAffiliate= new Swiper('.item_play_dif_slide_detail_affiliate', {

    navigation: {
        nextEl: '.item_play_dif_slide .swiper-button-next',
        prevEl: '.item_play_dif_slide .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    updateOnImagesReady: true,
    // lazyLoading: false,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    // watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: false,
    centeredSlides: false,
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 12,


    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    // slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    breakpoints: {
        // 1460: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 476,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //     },
        // },
        // 1220: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 180,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //
        //     },
        // },
        992: {
            slidesPerView: 3,
        },


        480: {
            slidesPerView: 2,

        }
    }
});
var swiper22 = new Swiper('.swiper-related-article-inner', {

    navigation: {
        nextEl: '.item_play_dif_slide .swiper-button-next',
        prevEl: '.item_play_dif_slide .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    updateOnImagesReady: true,
    // lazyLoading: false,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    // watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: false,
    centeredSlides: false,
    slidesPerView: 3.5,
    speed: 800,
    spaceBetween: 12,


    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    // slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    breakpoints: {
        // 1460: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 476,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //     },
        // },
        // 1220: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 180,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //
        //     },
        // },
        992: {
            slidesPerView: 3.5,
        },


        480: {
            slidesPerView: 2.25,

        }
    }
});
var swiper4 = new Swiper('.buy_card_device', {


    navigation: {
        nextEl: '.item_play_dif_slide .swiper-button-next',
        prevEl: '.item_play_dif_slide .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    // updateOnImagesReady: true,
    // lazyLoading: false,
    // watchSlidesVisibility: false,
    // lazyLoadingInPrevNext: false,
    // lazyLoadingOnTransitionStart: false,

    // watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: false,
    centeredSlides: false,
    slidesPerView: 5,
    speed: 800,
    spaceBetween: 12,


    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    // slideToClickedSlide: true,
    //
    // observer: true,
    // observeParents: true,
    breakpoints: {
        // 1460: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 476,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //     },
        // },
        // 1220: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 180,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //
        //     },
        // },
        992: {
            slidesPerView: 3,
        },


        480: {
            slidesPerView: 2,

        }
    }
});

var swiper3 = new Swiper('.special_service_content_slide_detail', {

    // Optional parameters
    cssMode: true,
    loop: false,
    // centeredSlides: false,
    // slidesPerView: 'auto',
    disableOnInteraction: false,
    freeMode: true,
    slidesPerView: 3,
    initialSlide: 3,
    // slideToClickedSlide: true,
    spaceBetween: 12,
    keyboard: {
        enabled: true,
    },
    mousewheel: false,
    // autoplay: false,

    speed: 1000,
    autoplay: false,
    breakpoints: {
        992: {
            slidesPerView: 3,
            centeredSlides: false,
        },


        480: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
});

var swiper5= new Swiper('.item_play_dif_slide_detailv222', {


    navigation: {
        nextEl: '.item_play_dif_slide .swiper-button-next',
        prevEl: '.item_play_dif_slide .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    updateOnImagesReady: true,
    // lazyLoading: false,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    // watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: false,
    centeredSlides: false,
    slidesPerView: 4,
    speed: 800,
    spaceBetween: 12,


    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    // slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    breakpoints: {
        // 1460: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 476,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //     },
        // },
        // 1220: {
        //     coverflowEffect: {
        //         rotate: 0   ,
        //         stretch: 180,
        //         depth: 300,
        //         modifier: 1, // 2,3
        //         slideShadows : false,
        //
        //     },
        // },
        992: {
            slidesPerView: 3,
        },


        480: {
            slidesPerView: 2,

        }
    }
});

var flash_sale_home = new Swiper('.flash-sale-home', {

    navigation: {
        nextEl: '.item_play_dif_slide .swiper-button-next',
        prevEl: '.item_play_dif_slide .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    updateOnImagesReady: true,
    // lazyLoading: false,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    // watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: false,
    centeredSlides: false,
    slidesPerView: 4,
    speed: 800,
    spaceBetween: 12,


    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    // slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },


        780: {
            slidesPerView: 2,

        }
    }
});
var flash_sale_list = new Swiper('.flash-sale-list-home', {

    navigation: {
        nextEl: '.item_play_dif_slide .swiper-button-next',
        prevEl: '.item_play_dif_slide .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     autoplaySpeed: 5000,
    //
    // },
    autoplay: true,
    // preloadImages: false,
    updateOnImagesReady: true,
    // lazyLoading: false,
    watchSlidesVisibility: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingOnTransitionStart: false,

    // watchSlidesProgress: true,
    //
    lazy: true,
    lazy: {
        loadPrevNext: true,
    },
    loop: false,
    centeredSlides: false,
    slidesPerView: 4,
    speed: 800,
    spaceBetween: 12,


    // autoplay: false,
    // parallax: true,
    touchMove: true,
    freeModeSticky:true,
    grabCursor: true,
    // slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },


        780: {
            slidesPerView: 2,

        }
    }
});
