<template>
    <div class="home-categories">
        <div class="inner-categories">
            <div class="category-box" v-for="item in categoriesData" :key="item">
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
</template>

<script>
export default {
	name: 'CategorySection',
	data() {
		return {
			categoriesData: [
				{
					img: '../assets/imgs/slider-1.jpg',
					text: 'Per lui',
					description: 'Mini descrizione'
				},
				{
					img: '../assets/imgs/slider-2.jpg',
					text: 'Per lei',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
				},
				{
					img: '../assets/imgs/slider-3.jpg',
					text: 'Accessori',
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
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
}

.category-box {
	width: 30%;
	height: 600px;
	background-size: cover;
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

.image-ground > .dark-cover > .categories-content > h1{
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

@media screen and (max-width: 1200px) {
	.category-box {
		height: 450px;
		min-width: 30%;
		margin: 15px 10px;
	}

	.inner-categories {
		width: 95%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
}

@media screen and (max-width: 992px) {
	.category-box {
		height: 550px;
		min-width: 45%;
		margin: 15px 10px;
	}

	.category-box:last-child {
		width: 100%;
		height: 300px;
	}

	.inner-categories {
		width: 95%;
		margin: auto;
		display: flex;
		align-content: center;
	}
}

@media screen and (max-width: 600px) {
	.category-box, .category-box:last-child {
		height: 450px;
		width: 85%;
		margin: 15px 10px;
	}

	.inner-categories {
		width: 85%;
		max-width: 90%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-content: center;
	}
}

@media screen and (max-width: 300px) {
	.category-box, .category-box:last-child {
		height: 350px;
		width: 100%;
		margin: 15px 10px;
	}

	.inner-categories {
		width: 95%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-content: center;
	}
}
</style>