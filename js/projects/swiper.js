export function cardSwiper() {
    const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //responsive
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        }
    }

});
}