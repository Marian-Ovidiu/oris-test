<template>
    <MainMenu></MainMenu>
    <Header :title="'Catalogo'" :image="'../../assets/imgs/header-imgs/header-1.jpeg'"></Header>

    <div class="container">
        <FilterBar :isPopupOpen="isPopupOpen" @toggle-main-filter-event="toggleMainFilterEvent" ref="getInnerFilters"></FilterBar>

        <div class="row">
            <div class="col-12 items-counter">
                <div class="counter">
                    <span>{{ countProducts }} articoli</span>
                </div>
            </div>
        </div>
        <div class="product-container">
            <ProductsSection ref="filteredProductsRecevedFunction"></ProductsSection>
        </div>
    </div>
    <Footer></Footer>
    <PopupFilter :isPopupOpen="isPopupOpen"  @is-popup-open-event="isPopupOpenEvent" ></PopupFilter>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';
import ProductsSection from '@/components/ProductsComponents/ProductsSection.vue';
import Header from '@/components/GlobalComponents/Header.vue';
import FilterBar from '@/components/GlobalComponents/FilterBar.vue';
import PopupFilter from '@/components/GlobalComponents/PopupFilter.vue';
import { useFilterStore } from '@/store/FIlterStore';

export default {
    name: 'ProductsView',
    setup: function(){
        const filterStore = useFilterStore();
        return {filterStore};
    },
    mounted() {
        this.filterStore.setData();
    },
    components: {
        MainMenu,
        Footer,
        Header,
        ProductsSection,
        FilterBar,
        PopupFilter
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
        countProducts() {
            if(this.filterStore.getSelectedProducts().length > 0){
                return this.filterStore.getSelectedProducts().length;
            }

            return this.filterStore.getProducts().length;
        }
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