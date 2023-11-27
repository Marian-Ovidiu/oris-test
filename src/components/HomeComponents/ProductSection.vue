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
import { database } from '@/classes/database.js';
export default {
	name: 'ProductSection',
	components: {
		ProductCard
	},
	data() {
		return {
			products: [
			]
		};
	},
	mounted() {
        const prd = new database();
        this.$data.products = prd.getProducts();
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

@media screen and (max-width: 450px) {
	h1 {
		font-size: 25px;
	}
}
</style>