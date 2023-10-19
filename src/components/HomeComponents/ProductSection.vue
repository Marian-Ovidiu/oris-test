<template>
	<div class="custom-container">
		<div class="inner-custom-container">
			<div class="header-products-section">
				<div class="title">
					<h1>Scopri i predotti in evidenza</h1>
				</div>
				<div class="separator"></div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 product-container"
						v-for="(product, index) in products" :key="index">
						<div class="product">
							<div class="product-img" :style="'background-image: url(' + product.imageUrl + ');'"></div>
							<div class="product-details">
								<div class="product-price">
									€<div>{{ product.price }}</div>
								</div>
								<div class="product-title">
									<div>{{ product.name }}</div>
								</div>
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
	name: 'ProductSection',
	data() {
		return {
			products: [
				{
					name: 'Prodotto 1',
					description: 'Descrizione del prodotto 1',
					price: '10.99',
					imageUrl: '../assets/imgs/slider-1.jpg',
				},
				{
					name: 'Prodotto 15',
					description: 'Descrizione del prodotto 15',
					price: '19.99',
					imageUrl: '../assets/imgs/slider-2.jpg',
				},
				{
					name: 'Prodotto 15',
					description: 'Descrizione del prodotto 15',
					price: '19.99',
					imageUrl: '../assets/imgs/slider-3.jpg',
				},
				{
					name: 'Prodotto 15',
					description: 'Descrizione del prodotto 15',
					price: '19.99',
					imageUrl: '../assets/imgs/slider-1.jpg',
				},
				{
					name: 'Prodotto 15',
					description: 'Descrizione del prodotto 15',
					price: '19.99',
					imageUrl: '../assets/imgs/slider-2.jpg',
				}
			],
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

.custom-container {
	font-family: serif;
	width: 100%;
	padding: 20px;
}

.header-products-section>.title {
	font-size: 35px;
}

.inner-custom-container {
	width: 80%;
	margin: 15px auto;
	text-align: center;

}

.separator {
	width: 10%;
	border: 2px solid lightgray;
	margin: 15px auto 40px;
}

.product-container {
	margin: 15px 0;
}

.product {
	width: 90%;
	height: 450px;
	margin: auto;
}

@media screen and (max-width: 576px) {
	.product {
		width: 100%;
	}
}

@media screen and (min-width: 1000px) {
	.product {
		height: 425px;
	}
}

@media screen and (min-width: 1450px) {
	.product {
		height: 500px;
		margin: auto;
	}
}

@media screen and (min-width: 1650px) {
	.product {
		height: 550px;
		margin: auto;
	}
}

.product-img {
	width: 100%;
	height: 85%;
	background-size: cover;
	background-position: center center;
}

.product-details {
	width: 100%;
	height: 15%;
	display: flex;
}

.product-price {
	width: 30%;
	height: 100%;
	border-right: 1px solid lightgray;
	display: flex;
	justify-content: center;
	align-items: center;
}

.product-title {
	width: 70%;
	height: 100%;
	padding: 0 5px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>