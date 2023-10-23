<template>
    <MainMenu></MainMenu>
    <ProductsHeaderSection></ProductsHeaderSection>
    <div class="container product-container">
        <div class="row">
            <div class="col-12 filter-container">
                <div class="filter" v-for="(filter, index) in filters" :key="index" :class="{ 'selected': filter.selected }"
                    @click="toggleFilter(filter)">
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

        <ProductsSection></ProductsSection>
    </div>
    <Footer></Footer>
    <div id="filter-popup" class="filter-popup" v-if="isPopupOpen">
        <div class="popup-content">
            <span class="close" @click="closePopup">×</span>
            <h2>{{ selectedFilter.label }}</h2>
        </div>
    </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import ProductsHeaderSection from '@/components/ProductsComponents/ProductsHeaderSection.vue';
import ProductsSection from '@/components/ProductsComponents/ProductsSection.vue';


export default {
    name: 'ProductsView',
    components: {
        MainMenu,
        Footer,
        ProductsHeaderSection,
        ProductsSection
    },
    data() {
        return {
            isPopupOpen: false,
            selectedFilter: null,
            filters: [
                { label: 'Filtro 1', selected: false },
                { label: 'Filtro 2', selected: false },
                { label: 'Filtro 3', selected: false },
            ],
        };
    },
    methods: {
        toggleFilter(filter) {

            if (!filter.selected) {
                this.isPopupOpen = true;
            }

            filter.selected = !filter.selected;

            this.selectedFilter = filter;

        },
        closePopup() {
            this.isPopupOpen = false;
        },
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
    background-color: red;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
}
</style>