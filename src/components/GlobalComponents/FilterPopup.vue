<template>
    <div id="filter-popup" class="filter-popup" v-if="localIsPopupOpen">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterPopup',
    props: [
        'isPopupOpen',
        'selectedFilter',
        'selectedFilters',
        'products'
    ],
    data() {
        return {
            localIsPopupOpen: this.isPopupOpen,
            localSelectedFilters: this.selectedFilters,
            localFilteredProducts: this.filteredProducts
        }
    },
    watch: {
        isPopupOpen(isPopupOpen) {
            this.localIsPopupOpen = isPopupOpen;
        }
    },
    methods: {
        closePopup() {
            this.localIsPopupOpen = false;
            this.$emit('isPopupOpenEvent',this.localIsPopupOpen);
        },
        toggleInnerFilter(innerFilter, parentId) {
            const selectedFilter = this.localSelectedFilters.find((f) => f.parentId === parentId);

            if (!selectedFilter.childFilters) {
                selectedFilter.childFilters = [];
            }

            const indexChildExist = selectedFilter.childFilters.findIndex((f) => f.id === innerFilter.id);

            if (indexChildExist === -1) {
                selectedFilter.childFilters.push(innerFilter);
            } else {
                selectedFilter.childFilters.splice(indexChildExist, 1);
            }

            let parentIndex = this.localSelectedFilters.findIndex((f) => f.parentId === parentId);

            if (parentIndex !== -1) {
                if ('childFilters' in this.localSelectedFilters[parentIndex] && this.localSelectedFilters[parentIndex].childFilters.length > 0) {
                    this.localSelectedFilters[parentIndex].selected = true;
                } else {
                    this.localSelectedFilters[parentIndex].selected = false;
                }
            }

            this.localFilteredProducts = this.getFilteredProducts();
            // this.$refs.filteredProductsRecevedFunction.filteredProductsReceved(this.filteredProducts);
            this.localIsPopupOpen = true;
            this.$emit('filteredProductsReceved', {
                filteredProducts: this.localFilteredProducts,
                selectedFilters: this.localSelectedFilters,
                filteredProducts: this.localFilteredProducts,
                isPopupOpen: this.localIsPopupOpen
            } );
        },
        getFilteredProducts() {
            return this.products.filter((product) => {
                return this.localSelectedFilters.every((filter) => {
                    const filterData = filter.childFilters ? filter.childFilters.map((f) => f.id) : [];
                    return filterData.length === 0 || product.filters[filter.parentId - 1].filters.some((f) => filterData.includes(f));
                });
            });
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

.content-popup {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 30px;
}

.header-title-popup {
    width: 75%;
}

.header-close-popup {
    width: 25%;
    flex-direction: row-reverse;
}

.header-title-popup,
.header-close-popup {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.inner-filter {
    height: 45px;
    border: 1px solid gray;
    margin: 5px 0;
    text-align: center;
    line-height: 45px;
}
</style>