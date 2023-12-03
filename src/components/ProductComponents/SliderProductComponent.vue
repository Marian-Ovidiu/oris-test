<template>
    <div class="header-product">
        <div class="immagine-ingrandita" :style="'background-image: url(\'' + immagineIngrandita + '\')'"
            id="immagine-ingrandita">
        </div>
        <Swiper :autoplay="{ delay: 2000 }" :loop="true" :loopAdditionalSlides="2" :modules="modules" navigation  ref="swiperRef"
            v-if="product !== null" slidesPerView="3" :direction="swiperDirection" :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" class="swiper-container">
            <SwiperSlide :slides-per-view="1" navigation :pagination="{ clickable: true }" v-for="img in localImages"
                class="swiper" :key="img">
                <div class="images-container" :style="'background-image: url(' + img.img + ');'"
                    @click="showImage(img.img)"></div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


export default {
	name: 'SliderProductComponent',
    props: [
        'images'
    ],
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
	created() {
		window.addEventListener('resize', this.handleResize);
	},
	data() {
		return {
			swiperDirection: window.innerWidth > 768 ? 'vertical' : 'horizontal',
			immagineIngrandita: this.images[0].img,
			localImages: this.images
		};
	},
	watch: {
    	'images': 'updateImages'
  	},
	components: {
		Swiper,
		SwiperSlide
	},
	methods: {
		showImage(largeImageUrl) {
			this.immagineIngrandita = largeImageUrl;
		},
		handleResize() {
			this.shouldLoop = window.innerWidth > 768;
			this.swiperDirection = this.shouldLoop ? 'vertical' : 'horizontal';
		},
		updateImages(data){
			this.immagineIngrandita = data[0].img;
			this.localImages = data;
			this.refreshSwiper()
		},
		refreshSwiper() {
			if (this.$refs.swiperRef && this.$refs.swiperRef.$swiper) {
				console.log('ciaopp');
				this.$refs.swiperRef.$swiper.update();
			}
		},
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.handleResize);
	},
}
</script>


<style scoped>
.header-product {
	border-top: 1px solid lightgray;
	padding-top: 5px;
	width: 100%;
	margin: auto;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
}

.swiper {
	display: flex;
	justify-content: center;
}

.images-container {
	height: 175px;
	width: 80%;
	margin: 0 5px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

.swiper-container {
	margin: 10px auto;
	width: 30%;
	height: 540px;
}

.immagine-ingrandita {
	margin: auto;
	height: 540px;
	width: 70%;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

@media (min-width: 769px) {
	.swiper-slide{
		height: 33.3%;
	}
}


@media (max-width: 768px) {
    .header-product {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.swiper-container {
		width: 80%;
		height: 100px;
	}

	.swiper-wrapper {
		display: flex;

	}

    .images-container {
		height: 100px;
		width: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
}

@media (max-width: 576px) {
	.header-product {
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.swiper-container {
		width: 80%;
		height: 100px;
	}

	.swiper-wrapper {
		display: flex;
	}

	.images-container {
		height: 100px;
		width: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	.immagine-ingrandita {
		width: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
	}
}
</style>