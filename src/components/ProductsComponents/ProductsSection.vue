<template>
    <div class="row">
        <div class="col-12 products-container">
            <div class="row" v-if="productsVisualizzati !== null && productsVisualizzati.length > 0">
                <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 content-products"
                    v-for="(product, index) in productsVisualizzati" :key="index">
                    <ProductCard :product="product"></ProductCard>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-12 no-products">
                    Nessun prodotto trovato, prova a cambiare i filtri
                </div>
            </div>
            <div class="row">
                <div class="col-12 show-more" v-if="inizio < products.length">
                    <button @click="caricaOggettiSuccessivi" class="show-more-button">Carica altro</button>
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
        this.$data.productsVisualizzati = prd.getProducts().slice(0, 12);
    },
    components: {
        ProductCard
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

<style>
.content-products {
    display: flex;
    flex-wrap: wrap;
}

.no-products {
    height: 150px;
    line-height: 50px;
}

.show-more {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.show-more-button {
    padding: 8px 15px;
    border: 1px solid lightgray;
}
</style>