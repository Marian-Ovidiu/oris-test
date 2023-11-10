<template>
	<div class="custom-container">
		<div class="inner-custom-container">
			<div class="header-products-section">
				<div class="title">
					<h1>Scopri i prodotti in evidenza</h1>
				</div>
				<div class="separator"></div>
			</div>

			<div class="container-fluid">
				<div class="row">
					<div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 content-products"
						v-for="(product, index) in products" :key="index">
						<ProductCard :product="product"></ProductCard>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProductCard from '@/components/GlobalComponents/ProductCard'

export default {
	name: 'ProductSection',
	components: {
		ProductCard
	},
	data() {
		return {
			products: [
				{
					productId:1,
					name: 'Prodotto 1',
					description: 'Descrizione del prodotto numero 1',
					price: '50.99',
					imageUrl: '../assets/imgs/fototest-1.jpg',
					selected: false,
					filters: [
						{
							typeFilter: 1,
							filters: [1]
						},
						{
							typeFilter: 2,
							filters: [2]
						},
						{
							typeFilter: 3,
							filters: [3]
						}
					]
				},
				{
					productId:2,
					name: 'Prodotto 2',
					description: 'Descrizione del prodotto 2',
					price: '79.99',
					imageUrl: '../assets/imgs/fototest-2.jpg',
					selected: false,
					filters: [
						{
							typeFilter: 1,
							filters: [1]
						},
						{
							typeFilter: 2,
							filters: [2]
						},
						{
							typeFilter: 3,
							filters: [3]
						}
					]
				},
				{
					productId:3,
					name: 'Prodotto 3',
					description: 'Descrizione del prodotto 3',
					price: '5.99',
					imageUrl: '../assets/imgs/fototest-3.jpg',
					selected: false,
					filters: [
						{
							typeFilter: 1,
							filters: [1]
						},
						{
							typeFilter: 2,
							filters: [2]
						},
						{
							typeFilter: 3,
							filters: [1]
						}
					]
				},
				{
					productId:4,
					name: 'Prodotto 4',
					description: 'Descrizione del prodotto 4',
					price: '6.99',
					imageUrl: '../assets/imgs/slider-1.jpg',
					selected: false,
					filters: [
						{
							typeFilter: 1,
							filters: [1]
						},
						{
							typeFilter: 2,
							filters: [3]
						},
						{
							typeFilter: 3,
							filters: [1]
						}
					]
				},
				{
					productId:5,
					name: 'Prodotto 5',
					description: 'Descrizione del prodotto 5',
					price: '9.99',
					imageUrl: '../assets/imgs/slider-2.jpg',
					selected: false,
					filters: [
						{
							typeFilter: 1,
							filters: [2]
						},
						{
							typeFilter: 2,
							filters: [3]
						},
						{
							typeFilter: 3,
							filters: [1]
						}
					]
				}
			]
		};
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.custom-container {
	font-family: serif;
	width: 100%;
}

.content-products {
	display: flex;
	flex-wrap: wrap;
}

.header-products-section>.title {
	font-size: 35px;
	text-align: center;
}

.inner-custom-container {
	width: 80%;
	margin: 15px auto;
}

.separator {
	width: 10%;
	border: 2px solid lightgray;
	margin: 15px auto 40px;
}

@media screen and (max-width: 576px) {
	.inner-custom-container {
		width: 100%;
		margin: 15px auto;
	}
}
</style>