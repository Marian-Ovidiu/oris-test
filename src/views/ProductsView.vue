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

        <ProductsSection></ProductsSection>
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
                        <div class="inner-filter" @click="toggleInnerFilter(filter, selectedFilter.id)">
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
                {
                    id: 1,
                    label: 'Brand',
                    selected: false,
                    filterData: [
                        {
                            id: 1,
                            name: 'Tommy Hilfiger'
                        },
                        {
                            id: 2,
                            name: 'Polo Ralph Lauren'
                        },
                        {
                            id: 3,
                            name: 'Hugo Boss'
                        }
                    ]
                },
                {
                    id: 2,
                    label: 'Taglie',
                    selected: false,
                    filterData: [
                        {
                            id: 1,
                            name: '32'
                        },
                        {
                            id: 2,
                            name: '33'
                        },
                        {
                            id: 3,
                            name: '34'
                        },
                        {
                            id: 4,
                            name: '35'
                        },
                        {
                            id: 5,
                            name: '36'
                        },
                        {
                            id: 6,
                            name: '37'
                        }
                    ]
                },
                {
                    id: 3,
                    label: 'Prezzo',
                    selected: false,
                    filterData: [
                        {
                            id: 1,
                            name: '0-10'
                        },
                        {
                            id: 2,
                            name: '11-50'
                        },
                        {
                            id: 3,
                            name: '50-150'

                        },
                        {
                            id: 4,
                            name: 'Oltre 150'
                        }

                    ]
                },
            ],
            selectedFilters: []
        };
    },
    methods: {
        toggleMainFilter(filter) {
            filter.selected = !filter.selected;

            this.selectedFilter = filter;
            this.isPopupOpen = true;

        },
        toggleInnerFilter(innerFilter, idFilter) {
            let indexParentExist = this.selectedFilters.findIndex(obj => obj.parentId === idFilter);

            if (indexParentExist === -1) {
                this.selectedFilters.push({
                    parentId: idFilter,
                    childFilters: [
                        innerFilter
                    ]
                });

            } else {
                let indexChildExist = this.selectedFilters[indexParentExist].childFilters.findIndex(obj => obj.id === innerFilter.id);

                if (indexChildExist === -1) {
                    this.selectedFilters[indexParentExist].childFilters.push(innerFilter);
                } else {
                    this.selectedFilters[indexParentExist].childFilters.splice(indexChildExist, 1);
                }
            }

            if (indexParentExist !== -1) {
                if (this.selectedFilters[indexParentExist].childFilters.length <= 0) {
                    this.selectedFilters.splice(indexParentExist, 1);
                }
            }
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