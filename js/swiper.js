// Initialize Hero Swiper
// Note: Kept 1500ms speed here as 'fade' effects usually look better with a slower transition
var heroSwiper = new Swiper(".hero-swiper", {
    effect: 'fade',
    allowTouchMove: false,
    autoHeight: true,
    fadeEffect: {
        crossFade: true
    },
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,
    },
});

// Initialize Reviews Swiper
var reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    initialSlide: 1,
    loop: true,
    speed: 750, // Matched smoothness
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    pagination: {
        el: ".reviews-swiper .swiper-pagination", // Scoped to container
        clickable: true,
    },
    navigation: {
        nextEl: ".reviews-swiper .swiper-button-next",
        prevEl: ".reviews-swiper .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Initialize Journeys Swiper
var journeysSwiper = new Swiper(".journeys-swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    initialSlide: 1,
    loop: true,
    speed: 750, // Matched smoothness
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: ".journeys-swiper .swiper-button-next",
        prevEl: ".journeys-swiper .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});

// Initialize Adventure Swiper
var adventureSwiper = new Swiper(".adventure-swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    initialSlide: 1,
    loop: true,
    speed: 750, // Matched smoothness
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    pagination: {
        el: ".adventure-swiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".adventure-swiper .swiper-button-next",
        prevEl: ".adventure-swiper .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});
