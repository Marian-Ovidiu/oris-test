<template>
	<div class="home-categories">
		<div class="row">
			<div class="col-lg-4 col-xl-4 col-xxl-4" v-for="(item, index) in categoriesData"
				:class="{ 'col-md-6 col-sm-6 col-6': index < 2, 'col-md-12 col-sm-12 col-12 max-width-full': index === 2 }"
				:key="item">
				<div class="category-box" :class="{ 'change-height': index === 2}">
					<div class="image-ground" :style="'background-image: url(' + item.img + ');'">
						<div class="dark-cover">
							<div class="categories-content">
								<h1>{{ item.text }}</h1>
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
	data() {
		return {
			categoriesData: [
				{
					img: '../assets/imgs/for-him.jpeg',
					text: 'Per lui',
					description: 'Mini descrizione'
				},
				{
					img: '../assets/imgs/for-her.jpeg',
					text: 'Per lei',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
				},
				{
					img: '../assets/imgs/other.jpeg',
					text: 'Kids & Teenagers',
					description: null
				}
			]
		};
	},
	components: {
	},
	mounted() {

	},
	methods: {

	},
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
	background-color: #000;
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}

.image-ground>.dark-cover>.categories-content>h1 {
	position: relative;
	z-index: 1;
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
	z-index: 2;
	width: 100%;
	height: 100%;
	background: radial-gradient(rgba(55, 65, 81, 1) 0%, rgba(55, 65, 81, 0.7) 100%);
	display: flex;
	justify-content: center;
	align-items: center;
}

.categories-content {
	text-align: center;
	width: 100%;
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