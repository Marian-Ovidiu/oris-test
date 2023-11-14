<template>
    <MainMenu></MainMenu>
    <Header :title="'Prodotti'" :image="'../../assets/imgs/header-1.jpeg'"></Header>

    <div class="container">
        <FilterBar :filters="filters" :selectedFilters="selectedFilters" :selectedFilter="selectedFilter"
            :isPopupOpen="isPopupOpen" @toggle-main-filter-event="toggleMainFilterEvent" ref="getInnerFilters"></FilterBar>

        <div class="row" v-if="filteredProducts.length > 0">
            <div class="col-12 items-counter">
                <div class="counter">
                    <span>{{ filteredProducts.length }} articoli</span>
                </div>
            </div>
        </div>
        <div class="product-container">
            <ProductsSection ref="filteredProductsRecevedFunction"></ProductsSection>
        </div>
    </div>
    <Footer></Footer>
    <FilterPopup :isPopupOpen="isPopupOpen" :selectedFilter="selectedFilter" :selected-filters="selectedFilters"
        :products="products" @filtered-products-receved="filteredProductsRecevedFunction"
        @is-popup-open-event="isPopupOpenEvent" ref="getFilteredProducts"></FilterPopup>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import ProductsSection from '@/components/ProductsComponents/ProductsSection.vue';
import Header from '@/components/GlobalComponents/Header.vue';
import FilterBar from '@/components/GlobalComponents/FilterBar.vue';
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
        Header,
        ProductsSection,
        FilterPopup,
        FilterBar
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
        filteredProductsRecevedFunction(data) {
            this.$refs.filteredProductsRecevedFunction.filteredProductsReceved(data.filteredProducts);
            this.selectedFilters = data.selectedFilters;

            for (let i in this.selectedFilters) {
                if ('childFilters' in this.selectedFilters[i]) {
                    this.selectedFilters[i].childFiltersCounter = this.selectedFilters[i].childFilters.length;
                    let index = this.filters.findIndex((f) => f.parentId === this.selectedFilters[i]);
                    if (index !== -1) {
                        this.filters[index].childFiltersCounter = this.selectedFilters[i].childFiltersCounter;
                    }
                }
            }

            this.filteredProducts = data.filteredProducts;
            this.isPopupOpen = data.isPopupOpen
            this.$refs.getInnerFilters.getInnerFilters();
        },
        toggleMainFilterEvent(data) {
            this.selectedFilter = data.selectedFilter;
            this.selectedFilters = data.selectedFilters;
            this.isPopupOpen = data.isPopupOpen
        },
        isPopupOpenEvent(data) {
            this.isPopupOpen = data;
        },
        deleteInnerFilter(innerFilter) {
            if (this.selectedFilters.length > 0) {
                for (let i in this.selectedFilters) {
                    if (this.selectedFilters[i].parentId === innerFilter.parentId) {
                        if ('childFilters' in this.selectedFilters[i] && this.selectedFilters[i].childFilters.length > 0) {
                            for (let j in this.selectedFilters[i].childFilters) {
                                if (this.selectedFilters[i].childFilters[j].id === innerFilter.id) {
                                    this.selectedFilters[i].childFilters.splice(j, 1);
                                    if (this.selectedFilters[i].childFilters.length <= 0) {
                                        this.selectedFilters[i].selected = false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.filteredProducts = this.$refs.getFilteredProducts.getFilteredProducts();
            this.$refs.filteredProductsRecevedFunction.filteredProductsReceved(this.filteredProducts);

            for (let i in this.selectedFilters) {
                if ('childFilters' in this.selectedFilters[i]) {
                    this.selectedFilters[i].childFiltersCounter = this.selectedFilters[i].childFilters.length;
                    let index = this.filters.findIndex((f) => f.parentId === this.selectedFilters[i]);
                    if (index !== -1) {
                        this.filters[index].childFiltersCounter = this.selectedFilters[i].childFiltersCounter;
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
.product-container {
    margin: auto;
    width: 90%;
}

.items-counter {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}

.counter {
    font-size: 12px;
}

@media (max-width: 568px) {
    .product-container {
        width: 100%;
    }
}
</style>