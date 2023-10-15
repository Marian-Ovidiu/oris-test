<template>
    <Swiper :autoplay="{ delay: 1500 }" :loop="true" :loopAdditionalSlides="1" :modules="modules" navigation
        :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <SwiperSlide :slides-per-view="1" navigation :pagination="{ clickable: true }" v-for="img in sliderImages"
            :key="img">
            <div class="images-container" :style="'background-image: url(' + img.img + ');'">
                <div class="slide-content">
                    <div class="inner-slide-content">
                    <h1 v-if="img.text">{{img.text}}</h1>
                    <p v-if="img.description">{{ img.description }}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

export default {
    name: 'HomeSlider',
    setup() {
        const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        };
    },
    data() {
        return {
            sliderImages: [
                {
                    img: '../assets/imgs/slider-1.jpg',
                    text: 'Testo di test 1',
                    description: 'Mini descrizione'
                },
                {
                    img: '../assets/imgs/slider-2.jpg',
                    text: 'Testo di test 2',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                },
                {
                    img: '../assets/imgs/slider-3.jpg',
                    text: 'Testo di test 1',
                    description: null
                }
            ]

        };
    },
    components: {
        Swiper,
        SwiperSlide
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.images-container {
    height: 75vh;
    width: 100%;
    background-size: cover;
    background-position: center;

}
.slide-content {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* background: radial-gradient(rgba(55, 65, 81, 0.6) 0%, rgba(55, 65, 81, 0.1) 100%); */
    background: radial-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%);
    /* background-color: rgba(55, 65, 81, 0.6); */
}

.inner-slide-content {
    font-family: 'Playfair Display', serif;
    text-align: center;
    color: white;
    width: 50%;
    margin: auto;
    padding: 15px 50px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
}

.inner-slide-content > h1 {
    margin-bottom: 10px;
    font-size: 25px;
}

@media screen and (max-width: 768px) {
    .inner-slide-content {
        width: 100%;
    }
}
</style>