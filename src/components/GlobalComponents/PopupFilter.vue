<template>
    <div id="filter-popup" class="filter-popup" v-if="localIsPopupOpen">
        <div class="popup-content">
            <div class="header-popup">
                <div class="header-title-popup">
                    {{ filter.label }}
                </div>
                <div class="header-close-popup">
                    <font-awesome-icon icon="fa-window-close" class="fa-2x fa-brand close" @click="closePopup" />
                </div>
            </div>

            <div class="container-fluid">
                <div class="content row">
                    <div class="col-6 col-sm-6 col-md-6 col-xl-4 col-xxl-4" v-for="(f, index) in filter.filterData"
                        :key="index">
                        <div class="inner-filter" @click="handleFilterChange(f)" :class="f.selected ? 'selected' : ''">
                            {{ f.name }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-popup">
                <div class="button-popup" @click="closePopup">
                    {{ countProducts }} prodotti
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useFilterStore } from '@/store/FIlterStore';
import $ from 'jquery';

export default {
    name: 'PopupFilter',
    setup: function () {
        const filterStore = useFilterStore();
        return { filterStore };
    },
    props: [
        'isPopupOpen',
    ],
    data() {
        return {
            products: this.filterStore.getProducts(),
            localIsPopupOpen: this.isPopupOpen,
            filter: []
        }
    },
    watch: {
        isPopupOpen(isPopupOpen) {
            this.filter = this.filterStore.getSelectedFilter();
            this.localIsPopupOpen = isPopupOpen;

            setTimeout(function(){
                $('#filter-popup').addClass('show');
            }, 100)
        },
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
        closePopup() {
            $('#filter-popup').addClass('zoom-out');

            setTimeout(() => {
                this.localIsPopupOpen = false;
                this.$emit('isPopupOpenEvent', this.localIsPopupOpen);
            }, 500);
        },
        handleFilterChange(filter) {
            if (this.filterStore.selectedFilters.length > 0) {

                let founded = this.filterStore.selectedFilters.find((f) => parseInt(f.parentId) === parseInt(this.filter.parentId));

                if (founded) {
                    let f = null;
                    for (let i = 0; i < this.filterStore.selectedFilters.length; i++) {
                        if (parseInt(this.filterStore.selectedFilters[i].parentId) === parseInt(founded.parentId)) {
                            for (let j = 0; j < this.filterStore.selectedFilters[i].filters.length; j++) {
                                if (parseInt(this.filterStore.selectedFilters[i].filters[j].id) === parseInt(filter.id)) {
                                    filter.selected = false;
                                    this.filterStore.setRemSelectedFilters(parseInt(i), parseInt(j));
                                    f = i;
                                    break;
                                }
                            }
                        }
                    }

                    if (f === null) {
                        for (let i = 0; i < this.filterStore.selectedFilters.length; i++) {
                            if (parseInt(this.filterStore.selectedFilters[i].parentId) === parseInt(founded.parentId)) {
                                filter.selected = true;
                                this.filterStore.setAddSelectedChildFilters(i, filter);
                            }
                        }
                    }
                } else {
                    filter.selected = true;
                    this.filterStore.setAddSelectedFilters({
                        parentId: this.filter.parentId,
                        filters: [filter]
                    });
                }

            } else {
                filter.selected = true;
                this.filterStore.setAddSelectedFilters({
                    parentId: this.filter.parentId,
                    filters: [filter]
                });
            }
            let test = this.filterStore.getSelectedFilters().find((f) => parseInt(f.parentId) === parseInt(this.filter.parentId));
            this.filterStore.setFilteredProducts(this.applicaFiltri())
        },
        applicaFiltri() {
            return this.filterStore.getProducts().filter(prodotto => {
                return this.filterStore.getSelectedFilters().every(filtro => {
                    const filtroProdotto = prodotto.filters.find(p => parseInt(p.typeFilter) === parseInt(filtro.parentId));

                    if (filtroProdotto) {
                        return filtro.filters.some(idFiltro => filtroProdotto.filters.includes(idFiltro.id));
                    } else {
                        return false;
                    }
                });
            })
        }
    }
}
</script>

<style scoped>

.filter-popup{
  position: fixed;
  inset:0;
  visibility:hidden;
  background: rgba(0,0,0,.7);
  transition: transform 450ms, opacity 850ms;
}


.show {
  transform: scale(1.1);
  visibility: visible;
  opacity: 1;
}

.zoom-out {
    transform: scale(1);
    visibility: visible;
    opacity: 1;
}

 .selected {
    font-weight: bolder;
    border: 1px solid black !important;
}

#filter-popup.container-fluid:first-child {
    max-height: 350px !important;
    overflow: scroll !important;
}

#filter-popup.container-fluid:first-child::-webkit-scrollbar {
    display: none !important;
}

.filter-popup {
    background-color: rgba(0, 0, 0, 0.7);
}

.content{
    font-size: 14px;
}

.popup-content {
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    width: 80%;
    max-width: 450px;
    max-height: 70vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.header-popup, .footer-popup {
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 14px;
}
.footer-popup {
  justify-content: center;
  align-items: center;
  margin: 10px 0;

}

.button-popup {
  width: 200px;
  padding:10px;
  background-color: #212529;
  color: white;
}

.header-title-popup {
    width: 75%;
}

.header-title-popup > span {
  font-size: 16px;
  font-weight: bolder;
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
    height: 40px;
    border: 1px solid lightgray;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
} 
</style>