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

        <div class="row">
            <div class="col-12 inner-filter-container">
                <div class="inner-filter" v-for="(filter, index) in innerFilters" :key="index"
                    @click="deleteInnerFilter(filter)">
                    {{ filter.name }}
                </div>
            </div>
        </div>

        <div class="row" v-if="filteredProducts.length > 0">
            <div class="col-12 items-counter">
                <div class="counter">
                    <span>{{ filteredProducts.length }} articoli</span>
                </div>
            </div>
        </div>

        <ProductsSection ref="filteredProductsRecevedFunction"></ProductsSection>
    </div>
    <Footer></Footer>
    <FilterPopup :isPopupOpen="isPopupOpen" :selectedFilter="selectedFilter" :selected-filters="selectedFilters"
        :products="products" @filtered-products-receved="filteredProductsRecevedFunction"
        @is-popup-open-event="isPopupOpenEvent" ref="getFilteredProducts"></FilterPopup>
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
    computed: {
        innerFilters() {
            let innerFilters = [];
            if (this.selectedFilters.length > 0) {
                for (let i in this.selectedFilters) {
                    if ('childFilters' in this.selectedFilters[i] && this.selectedFilters[i].childFilters.length > 0) {
                        for (let j in this.selectedFilters[i].childFilters) {
                            let innerFilter = this.selectedFilters[i].childFilters[j];
                            innerFilter.parentId = this.selectedFilters[i].parentId;
                            innerFilters.push(innerFilter);
                        }
                    }
                }
            }

            if (innerFilters.length > 0) {
                return innerFilters;
            }

            return [];
        },
    },
    methods: {
        toggleMainFilter(filter) {
            this.selectedFilter = filter;

            let selected = this.selectedFilters.find((f) => f.parentId === filter.parentId);

            if (!selected) {
                this.selectedFilters.push(filter);
            }

            selected = this.selectedFilters.find((f) => f.parentId === filter.parentId);

            if ('childFilters' in selected && selected.childFilters.length > 0) {
                filter.selected = true;
            } else {
                filter.selected = false;
            }

            this.isPopupOpen = true;
        },
        filteredProductsRecevedFunction(data) {
            this.$refs.filteredProductsRecevedFunction.filteredProductsReceved(data.filteredProducts);
            this.selectedFilters = data.selectedFilters;
            this.filteredProducts = data.filteredProducts;
            this.isPopupOpen = data.isPopupOpen
            this.innerFilters;
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
            console.log('diocanea');
            this.filteredProducts = this.$refs.getFilteredProducts.getFilteredProducts();
            this.$refs.filteredProductsRecevedFunction.filteredProductsReceved(this.filteredProducts);
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

.inner-filter-container {
    height: 55px;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid gray;
}

.filter-container::-webkit-scrollbar,
.inner-filter-container::-webkit-scrollbar {
    display: none;
}

.filter-container,
.inner-filter-container {
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

.inner-filter {
    border: 1px solid black;
    padding: 5px 10px;
    min-width: 50px;
    height: 35px;
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