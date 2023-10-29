<template>
    <div class="row">
        <div class="col-12 products-container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 content-products"
                    v-for="(product, index) in products" :key="index">
                    <ProductCard :product="product"></ProductCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProductCard from '@/components/GlobalComponents/ProductCard.vue';
import { database } from '@/classes/database.js';;

export default {
    name: 'ProductsSection',
    mounted() {
        const prd = new database();
        this.$data.products = prd.getProducts();
    },
    components: {
        ProductCard
    },
    data() {
        return {
            products: null
        };
    },
    methods: {
        filteredProductsReceved(filteredProducts) {
            this.products = filteredProducts;
        }
    }
}
</script>

<style>
.content-products {
    display: flex;
    flex-wrap: wrap;
}
</style>