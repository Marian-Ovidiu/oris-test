<template>
    <div class="row related-container">
        <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 content-products"
        v-for="(product, index) in productsVisualizzati" :key="index">
            <ProductRelatedCard :product="product"></ProductRelatedCard>
        </div>
    </div>
</template>

<script>

import ProductRelatedCard from '@/components/GlobalComponents/ProductRelatedCard.vue';
import { database } from '@/classes/database.js';;

export default {
    name: 'RelatedSection',
    mounted() {
        const prd = new database();
        this.$data.products = prd.getProducts();
        this.$data.productsVisualizzati = prd.getProducts().slice(0, 12);
    },
    components: {
        ProductRelatedCard
    },
    data() {
        return {
            products: [],
            productsVisualizzati: [],
            productsPerVolta: 12,
            inizio: 12
        };
    },
    methods: {
        filteredProductsReceved(filteredProducts) {
            this.products = filteredProducts;
            this.productsVisualizzati = filteredProducts.slice(0, 12);
        },
        caricaOggettiSuccessivi() {
            if (this.inizio < this.products.length) {
                const fine = this.inizio + this.productsPerVolta;
                this.productsVisualizzati = this.products.slice(0, fine);
                this.inizio = fine;
            }
        },
    }
}
</script>

<style scoped>
.related-container{
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.related-container::-webkit-scrollbar{
    display: none;
}

.content-products {
    min-width: 150px;
    display: flex;
    justify-content: space-between;
}

</style>