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
            <div class="col-12 items-counter">
                <div class="counter">
                    <span>34 articoli</span>
                </div>
            </div>
        </div>

        <ProductsSection ref="filteredProductsRecevedFunction"></ProductsSection>
    </div>
    <Footer></Footer>
    <div id="filter-popup" class="filter-popup" v-if="isPopupOpen">
        <div class="popup-content">
            <div class="header-popup">
                <div class="header-title-popup">
                    <span>{{ selectedFilter.label }}</span>
                </div>
                <div class="header-close-popup">
                    <font-awesome-icon icon="fa-window-close" class="fa-2x fa-brand close" @click="closePopup" />
                </div>
            </div>

            <div class="container-fluid">
                <div class="content-popup row">
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-xxl-6"
                        v-for="(filter, index) in selectedFilter.filterData" :key="index">
                        <div class="inner-filter" @click="toggleInnerFilter(filter, selectedFilter.parentId)">
                            {{ filter.name }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="footer-popup row">
                    <div class="col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6 footer-save-popup">
                        <span>Salva</span>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6 footer-close-popup" @click="closePopup">
                        <span>Chiudi</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import ProductsHeaderSection from '@/components/ProductsComponents/ProductsHeaderSection.vue';
import ProductsSection from '@/components/ProductsComponents/ProductsSection.vue';
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
        ProductsSection
    },
    data() {
        return {
            filters: null,
            products: null,
            isPopupOpen: false,
            selectedFilter: [],
            selectedFilters: [],
            filteredProducts: null

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
        toggleInnerFilter(innerFilter, parentId) {
            const selectedFilter = this.selectedFilters.find((f) => f.parentId === parentId);

            if (!selectedFilter.childFilters) {
                selectedFilter.childFilters = [];
            }

            const indexChildExist = selectedFilter.childFilters.findIndex((f) => f.id === innerFilter.id);

            if (indexChildExist === -1) {
                selectedFilter.childFilters.push(innerFilter);
            } else {
                selectedFilter.childFilters.splice(indexChildExist, 1);
            }

            let parentIndex = this.selectedFilters.findIndex((f) => f.parentId === parentId);

            if (parentIndex !== -1) {
                if ('childFilters' in  this.selectedFilters[parentIndex] &&  this.selectedFilters[parentIndex].childFilters.length > 0) {
                    this.selectedFilters[parentIndex].selected = true;
                } else {
                    this.selectedFilters[parentIndex].selected = false;
                }
            }

            this.filteredProducts = this.getFilteredProducts();
            this.$refs.filteredProductsRecevedFunction.filteredProductsReceved(this.filteredProducts);
            this.isPopupOpen = true;
        },
        getFilteredProducts() {
            return this.products.filter((product) => {
                return this.selectedFilters.every((filter) => {
                    const filterData = filter.childFilters ? filter.childFilters.map((f) => f.id) : [];
                    return filterData.length === 0 || product.filters[filter.parentId - 1].filters.some((f) => filterData.includes(f));
                });
            });
        },
        closePopup() {
            this.isPopupOpen = false;
        },
    }
}
</script>

<style scoped>
#filter-popup.container-fluid:first-child {
    max-height: 350px !important;
    overflow: scroll !important;
}

#filter-popup.container-fluid:first-child::-webkit-scrollbar {
    display: none !important;
}

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

.filter-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.popup-content {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.header-popup {
    width: 100%;
    height: 50px;
    display: flex;
    background-color: lightgrey;
}

.footer-popup {
    height: 50px;
    display: flex;
    background-color: lightgrey;
}

.content-popup {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 30px;
}

.inner-filter {
    height: 45px;
    border: 1px solid gray;
    margin: 5px 0;
    text-align: center;
    line-height: 45px;
}

.header-title-popup {
    width: 75%;
}

.footer-save-popup {
    text-align: center;
    line-height: 50px;
    background-color: green;
}

.header-close-popup {
    width: 25%;
    flex-direction: row-reverse;
}

.footer-close-popup {
    flex-direction: row-reverse;
    text-align: center;
    line-height: 50px;
}

@media (max-width: 576px) {
    .footer-popup {
        height: 70px;
    }

    .footer-save-popup,
    .footer-close-popup {
        line-height: 35px;
    }
}

.header-title-popup,
.header-close-popup {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
</style>