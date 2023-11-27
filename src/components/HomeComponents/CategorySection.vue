<template>
	<div class="home-categories">
		<div class="row">
			<div class="col-lg-4 col-xl-4 col-xxl-4" v-for="(item, index) in categoriesData" :class="{
				'col-md-6 col-sm-6 col-6': index < 2,
				'col-md-12 col-sm-12 col-12 max-width-full': index === 2
			}" :key="item">
				<div class="category-box" :class="{ 'change-height': index === 2 }">
					<div class="image-ground" :style="'background-image: url(' + item.img + ');'" ref="imageGround">
						<div class="dark-cover">
							<div class="categories-content">
								<span>{{ item.text }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'CategorySection',
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
		this.handleScroll();
	},
	data() {
		return {
			isImageGroundVisible: false,
			categoriesData: [
				{
					img: '../assets/imgs/other-imgs/for-him.jpeg',
					text: 'Per lui',
					description: ''
				},
				{
					img: '../assets/imgs/other-imgs/for-her.jpeg',
					text: 'Per lei',
					description: ''
				},
				{
					img: '../assets/imgs/other-imgs/other.jpeg',
					text: 'Kids & Teenagers',
					description: ''
				}
			]
		};
	},
	methods: {
		handleScroll() {
			const imageGrounds = this.$refs.imageGround;
			if (imageGrounds) {
				imageGrounds.forEach((imageGround) => {
					const rect = imageGround.getBoundingClientRect();
					this.isImageGroundVisible = rect.top < window.innerHeight && rect.bottom >= 0;
				});
			}
		}
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.home-categories {
	font-family: 'Playfair Display', serif;
	width: 100%;
	padding: 20px;
}

.inner-categories {
	display: flex;
	justify-content: center;
}

.category-box {
	width: 100%;
	height: 600px;
	background-size: cover;
	margin: auto;
}

.image-ground {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}

.image-ground>.dark-cover>.categories-content>span {
	position: relative;
	z-index: 1;
	font-size: 25px;
	color: white;
}

.image-ground::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: inherit;
	background-size: cover;
	transform-origin: center;
	transition: transform 0.4s ease-in-out;
}

.image-ground:focus::after,
.image-ground:hover::after {
	transform: scale(1.1);
}

.dark-cover {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: linear-gradient(360deg, rgba(0, 0, 0, 0.8) -1.72%, rgba(0, 0, 0, 0.4) 28.4%, rgba(0, 0, 0, 0) 40.5%);
	display: flex;
	align-items: end;
	padding-left: 15px;
	padding-bottom: 15px;
}

.categories-content {
	width: 100%;
	text-align: center;
}

.categories-content>h1 {
	font-size: 35px;
	color: white;
	text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 992px) {
	.category-box {
		margin: 15px auto;
		height: 350px;
	}

	.change-height {
		height: 200px !important;
		margin: 0 !important;

	}

	.max-width-full {
		width: 100% !important;
		height: 200px !important;
		padding: 0 10px !important;
		display: flex;
		justify-content: space-around;
	}


}
</style>