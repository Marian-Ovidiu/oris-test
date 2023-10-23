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

import ProductCard from '@/components/GlobalComponents/ProductCard.vue'
export default {
    name: 'ProductsSection',
    components: {
        ProductCard
    },
    data() {
        return {
            products: [
                {
                    name: 'Prodotto 1',
                    description: 'Descrizione del prodotto 1',
                    price: '10.99',
                    imageUrl: '../assets/imgs/fototest-1.jpg',
                },
                {
                    name: 'Prodotto 15',
                    description: 'Descrizione del prodotto 15',
                    price: '19.99',
                    imageUrl: '../assets/imgs/fototest-2.jpg',
                },
                {
                    name: 'Prodotto 15',
                    description: 'Descrizione del prodotto 15',
                    price: '19.99',
                    imageUrl: '../assets/imgs/fototest-3.jpg',
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
    }
}
</script>

<style>
.content-products {
    display: flex;
    flex-wrap: wrap;
}
</style>