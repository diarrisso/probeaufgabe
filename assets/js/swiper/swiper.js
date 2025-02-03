document.addEventListener('DOMContentLoaded', function () {
    const slidesData = [
        {
            image: './assets/images/sw@2x.jpg',
            alt: 'Shopware 6',
        },
        {
            image: './assets/images/sw@2x.jpg',
            alt: 'Slide 2',
        },
        {
            image: './assets/images/sw@2x.jpg',
            alt: 'Slide 3',
        },
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');

    if (!swiperWrapper) {
        return;
    }

    slidesData.forEach((slide) => {
        const slideHTML = `
            <div class="swiper-slide">
               <img src="${slide.image}" alt="${slide.alt}">
            </div>
        `;
        swiperWrapper.insertAdjacentHTML('beforeend', slideHTML);
    });

    const swiper = new Swiper('.intro-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 2,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        touchEventsTarget: 'wrapper',
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,

        speed: 800,
        breakpoints: {
            1280: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });
});
