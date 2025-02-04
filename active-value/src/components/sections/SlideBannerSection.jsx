import {Autoplay, Navigation, Pagination,} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const slidesData = [
    {
        id: 1,
        image: '/images/sw@3x.jpg',
        alt: 'slide partner 1',
    },
    {
        id: 2,
        image: '/images/sw@3x.jpg',
        alt: 'slide partner 2',
    },
    {
        id: 3,
        image: '/images/sw@3x.jpg',
        alt: 'slide partner 3',
    },
];


const SlideBannerSection = () => {

    return (
        <section className='slide_partner'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    type: 'bullets'
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
            >
                {slidesData.map((slideImage) => (
                    <SwiperSlide key={slideImage.id}>
                        <img src={slideImage.image} alt={slideImage.alt}/>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>

    );

};

export default SlideBannerSection;