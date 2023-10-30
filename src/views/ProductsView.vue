<template>
    <MainMenu></MainMenu>
    <ProductsHeaderSection></ProductsHeaderSection>
    <div class="container product-container">
        <div class="row">
            <div class="col-12 filter-container">
                <div class="filter" v-for="(filter, index) in filters" :key="index" :class="{ 'selected': filter.selected }"
                    @click="toggleMainFilter(filter)">
                    {{ filter.label }}
                </div>
            </div>
        </div>

        <div class="row" v-if="filteredProducts.length > 0">
            <div class="col-12 items-counter">
                <div class="counter">
                    <span>{{ filteredProducts.length  }} articoli</span>
                </div>
            </div>
        </div>

        <ProductsSection ref="filteredProductsRecevedFunction"></ProductsSection>
    </div>
    <Footer></Footer>
    <FilterPopup    :isPopupOpen="isPopupOpen" 
                    :selectedFilter="selectedFilter"
                    :selected-filters="selectedFilters"
                    :products="products"
                    @filtered-products-receved="filteredProductsRecevedFunction"
                    @is-popup-open-event="isPopupOpenEvent"></FilterPopup>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import ProductsHeaderSection from '@/components/ProductsComponents/ProductsHeaderSection.vue';
import ProductsSection from '@/components/ProductsComponents/ProductsSection.vue';
import FilterPopup from '@/components/GlobalComponents/FilterPopup.vue';

import { database } from '@/classes/database.js';

export default {
    name: 'ProductsView',
    mounted() {
        const db = new database();
        this.$data.filters = db.getFilters();
        this.$data.products = db.getProducts();
        this.$data.filteredProducts = db.getProducts();
    },
    components: {
        MainMenu,
        Footer,
        ProductsHeaderSection,
        ProductsSection,
        FilterPopup
    },
    data() {
        return {
            filters: null,
            products: [],
            isPopupOpen: false,
            selectedFilter: [],
            selectedFilters: [],
            filteredProducts: []
        };
    },
    methods: {
        toggleMainFilter(filter) {
            this.selectedFilter = filter;
            this.selectedFilters.push(filter);
            
            let selected = this.selectedFilters.find((f) => f.parentId === filter.parentId);
            
            if ('childFilters' in selected && selected.childFilters.length > 0) {
                filter.selected = true;
            } else {
                filter.selected = false;
            } 

            this.isPopupOpen = true;
        },
        filteredProductsRecevedFunction(data){
            this.$refs.filteredProductsRecevedFunction.filteredProductsReceved(data.filteredProducts);
            this.selectedFilters = data.selectedFilters;
            this.filteredProducts = data.filteredProducts;
            this.isPopupOpen = data.isPopupOpen
        },
        isPopupOpenEvent(data){
            this.isPopupOpen = data;
        }
    }
}
</script>

<style scoped>

.selected {
    background-color: gray;
    color: white;
    border: none !important;
}

.filter-container {
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid gray;
}

.filter-container::-webkit-scrollbar {
    display: none;
}

.filter-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.items-counter {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}

.filter {
    border: 1px solid black;
    padding: 10px;
    min-width: 150px;
    height: 50px;
    margin: 0 5px;
}

.counter {
    font-size: 12px;
}

.single-filter-details-container {
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    position: absolute;

}
</style>