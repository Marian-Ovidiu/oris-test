<template>
	<div class="product">
		<MainMenu></MainMenu>

		<div class="container-fluid">
			<div class="row">
				<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
					<SliderProductComponent v-if="product" :images="product.images"></SliderProductComponent>
				</div>
				<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
					<div class="product-content-container">
						<div class="brand">{{ getBrand }}</div>
						<div class="title" v-if="product !== null">{{ product.name }}</div>
						<div class="price" v-if="product !== null">{{ product.price }} € <span class="text-gray">Iva
								inclusa</span></div>
						<div class="taglie">
							<strong>Taglie: </strong>
							<span v-for="(taglia, index) in getTaglie" :key="index">{{ index === 0 ? taglia.name : '-' +
								taglia.name }} </span>
						</div>
						<div class="accordionn">
							<div class="accordionn-item">
								<input type="radio" name="accordionn" id="primo">
								<label for="primo">Composizione</label>
								<div class="content">
									<div class="inner-content">
										<strong>Composizione: </strong> 100% cotone	
									</div>
									<div class="inner-content">
										<strong>Fodera: </strong> 100% poliestere	
									</div>
									<div class="inner-content">
										<strong>Avvertenze: </strong> Lavaggio delicati	
									</div>
								</div>
							</div>	
							<div class="accordionn-item">
								<input type="radio" name="accordionn" id="secondo">
								<label for="secondo">Dettagli prodotto</label>
								<div class="content">
									<div class="inner-content">
										<strong>Colletto: </strong> Foderato	
									</div>
									<div class="inner-content">
										<strong>Chiusura: </strong> Cerniera
									</div>
									<div class="inner-content">
										<strong>Fantasia: </strong> Monocromo
									</div>
								</div>
							</div>	
							<div class="accordionn-item">
								<input type="radio" name="accordionn" id="terzo">
								<label for="terzo">Taglia e fit</label>
								<div class="content">
									<div class="inner-content">
										<strong>Vestibilità: </strong> Regolare	
									</div>
									<div class="inner-content">
										<strong>Linea: </strong> Dritta
									</div>
									<div class="inner-content">
										<strong>Fantasia: </strong> Monocromo
									</div>
								</div>
							</div>	
						</div>	
					</div>
				</div>
			</div>
				
			<div class="row">
				<div class="col-12">
					<div class="related-title">
						Potrebbe piacerti anche...
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<router-link :to="'/products'" class="show-all">
						Mostra tutti
					</router-link>
				</div>
			</div>
			
			<RelatedSection></RelatedSection>

		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';
import SliderProductComponent from '@/components/ProductComponents/SliderProductComponent.vue';
import RelatedSection from '@/components/ProductComponents/RelatedSection.vue';

import { database } from '@/classes/database.js';

export default {
	name: 'ProductView',
	data() {
		return {
			product: null,
			isDropdownOpen: false,
		};
	},
	watch: {
    	'$route.params.id_product': 'loadProductData'
  	},
	computed: {
		dropdownTitle() {
			return this.isDropdownOpen ? 'Nascondi Dropdown' : 'Mostra Dropdown';
		},
		getBrand() {
			if (this.product) {
				let filterBrand = this.product.filters.find((f) => f.typeFilter === 1);
				if (filterBrand) {
					const db = new database();
					let brand = db.getFilters().find((f) => f.parentId === 1);
					if (brand) {
						brand = brand.filterData.find((f) => f.id === filterBrand.filters[0])
						return brand.name;
					}
				}
			}
			return '';
		},
		getTaglie() {
			if (this.product) {
				let filterTaglie = this.product.filters.find((f) => f.typeFilter === 2);
				if (filterTaglie) {
					const db = new database();
					let taglie = db.getFilters().find((f) => f.parentId === 2);
					if (taglie) {
						let taglieToExport = [];

						for (let i in filterTaglie.filters) {

							for (let j in taglie.filterData) {
								if (filterTaglie.filters[i] == taglie.filterData[j].id) {
									taglieToExport.push(taglie.filterData[j]);
								}
							}
						}
						return taglieToExport;
					}
				}
			}
			return '';
		},
	},
	components: {
		MainMenu,
		Footer,
		SliderProductComponent,
        RelatedSection
	},
	mounted() {
		const db = new database();
		this.$data.product = db.getProducts().find((f) => f.productId == this.$route.params.id_product);
	},
	methods: {
		toggleDropdown() {
			this.isDropdownOpen = !this.isDropdownOpen;
		},
		loadProductData() {
			const db = new database();
			this.product = db.getProducts().find((f) => f.productId == this.$route.params.id_product);
    	}
	}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
.product-content-container {
	width: 100%;
	padding: 35px 25px;
}

.text-gray {
	color: gray;
}

.brand,
.price,
.taglie {
	font-size: 15px;
}

.taglie {
	padding: 10px 0;
}

.title {
	font-weight: bold;
	font-size: 30px;
	padding: 5px 0;
}

.accordionn {
	margin: 25px auto;
	width: 100%;
}
.accordionn .accordionn-item {
	width: 100%;
	padding: 3px 0;
	border-bottom: 1px solid lightgray;
	border-top: 1px solid lightgray;
}

.accordionn .accordionn-item label{
	display: flex;
	align-items: center;
	font-size: 14px;
	cursor: pointer;
}

label::before {
	content: '+';
	margin-right: 10px;
	font-size: 24px;
	font-weight: 600;
}

input[type="radio"]{
	display: none;
}

.accordionn .content{
	max-height: 0px;
	overflow: hidden;
	transition: max-height 0.5s, padding 0.5s;

}

.accordionn input[type="radio"]:checked + label + .content{
	max-height: 150px;
	padding: 10px 10px 20px;
}

.inner-content {
	width: 100%;
	margin: 3px 0;
	font-size: 13px;
}

.related-title {
	font-family: 'Playfair Display', serif;
	width: 100%;
	padding: 5px 10px;
	font-size: 18px;
}

.show-all {
	text-decoration: none;
	color: darkblue;
	font-size: 13px;
	padding: 5px 10px;
	font-family: 'Playfair Display', serif;
}
</style>
