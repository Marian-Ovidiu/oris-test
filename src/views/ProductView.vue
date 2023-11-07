<template>
	<div class="product">
		<MainMenu></MainMenu>

		<div class="header-product">
			<div class="immagine-ingrandita" :style="'background-image: url(\''+immagineIngrandita+'\')'" id="immagine-ingrandita">
				
			</div>
			<Swiper :autoplay="{ delay: 2000 }" :loop="true" :loopAdditionalSlides="2" :modules="modules" navigation
				slidesPerView="3" :direction="swiperDirection" :pagination="{ clickable: true }"
				:scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" class="swiper-container">
				<SwiperSlide :slides-per-view="1" navigation :pagination="{ clickable: true }" v-for="img in sliderImages"
					class="swiper" :key="img">
					<div class="images-container" :style="'background-image: url(' + img.img + ');'"
						@click="showImage(img.img)"></div>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="product-content-containee">

		</div>

		<Footer></Footer>
	</div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


export default {
	name: 'ProductView',
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
			immagineIngrandita: '../assets/imgs/fototest-1.jpg',
			sliderImages: [
				{
					img: '../assets/imgs/fototest-1.jpg',
					text: 'Testo di test 1',
					description: 'Mini descrizione'
				},
				{
					img: '../assets/imgs/fototest-2.jpg',
					text: 'Testo di test 2',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
				},
				{
					img: '../assets/imgs/fototest-3.jpg',
					text: 'Testo di test 1',
					description: null
				},
				{
					img: '../assets/imgs/fototest-1.jpg',
					text: 'Testo di test 1',
					description: 'Mini descrizione'
				},
				{
					img: '../assets/imgs/fototest-2.jpg',
					text: 'Testo di test 2',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
				},
				{
					img: '../assets/imgs/fototest-3.jpg',
					text: 'Testo di test 1',
					description: null
				}
			]
		};
	},
	components: {
		MainMenu,
		Footer,
		Swiper,
		SwiperSlide
	},
	mounted() {

	},
	methods: {
		showImage(largeImageUrl) {
			this.immagineIngrandita = largeImageUrl;
		},
		handleResize() {
			this.shouldLoop = window.innerWidth > 768;
			this.swiperDirection = this.shouldLoop ? 'vertical' : 'horizontal';
		}
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.handleResize);
	},
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'); */

.header-product {
	width: 80%;
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
