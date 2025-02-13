<template>
    <section class='slide_partner' id="partner">
        <swiper class=" w-full h-auto md:h-[300px] xl:h-[500px]"
                :modules="[Navigation, Pagination]"
                :slides-per-view="1"
                :space-between="0"
                :navigation="true"
                :pagination="{ clickable: true }"
                :loop="true"
                :autoplay="{delay: 500}"
                :disableOnInteraction="true"
        >
            <swiper-slide
                v-for="(slideContent, index) in slidesData" :key="index"
            >
                <img :src="slideContent.image" :alt="slideContent.alt"
                     class="object-cover h-[200px] w-full md:h-[300px] xl:h-[500px]"/>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

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

</script>

<style scoped>

</style>
