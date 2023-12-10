<template>
    <div class="row">
        <div class="col-12 filter-container">
            <div class="filter" v-for="(filter, index) in filterStore.getFilters()" :key="index"
                :class="{ 'selected': filter.selected }" @click="toggleMainFilter(filter)">
                <div class="label"> {{ filter.label }}</div>
                <div class="filter-counter">{{ countFilters(filter) }}</div>
            </div>
        </div>
    </div>

    <div class="row" v-if="innerFilters.length > 0">
        <div class="col-12 inner-filter-container">
            <div class="inner-filter" v-for="(filter, index) in innerFilters" :key="index"
                @click="deleteInnerFilter(filter)">
                {{ filter.name }}
            </div>
        </div>
    </div>
</template>


<script>
import { useFilterStore } from '@/store/FIlterStore';

export default {
    name: 'FilterBar',
    emits: ['toggleMainFilterEvent'],
    props: [
        'isPopupOpen'
    ],
    setup: function(){
        const filterStore = useFilterStore();
        return {filterStore};
    },
    data() {
        return {
            localIsPopupOpen: this.isPopupOpen
        }
    },
    watch: {
        isPopupOpen(data) {
            this.localIsPopupOpen = data;
        }
    },
    computed: {
        innerFilters() {
            let innerFilters = [];
            let selectedFilters = this.filterStore.getSelectedFilters()
            if (selectedFilters.length > 0) {
                for (let i in selectedFilters) {
                    for (let j in selectedFilters[i].filters) {
                        let innerFilter = selectedFilters[i].filters[j];
                        innerFilter.parentId = selectedFilters[i].parentId;
                        innerFilters.push(innerFilter);
                    }
                }
            }

            if (innerFilters.length > 0) {
                return innerFilters;
            }

            return [];
        }
    },
    methods: {
        toggleMainFilter(filter) {
            this.filterStore.selectedFilter = filter;
            this.localIsPopupOpen = true;

            this.$emit('toggleMainFilterEvent', {
                isPopupOpen: this.localIsPopupOpen
            });
        },
        getInnerFilters() {
            return this.innerFilters;
        },
        deleteInnerFilter(innerFilter) {
            let index = -1;
            for(let i =0; i < this.filterStore.selectedFilters.length; i++ ){
                if(parseInt(this.filterStore.selectedFilters[i].parentId) === parseInt(innerFilter.parentId)){
                    index=i;
                    break;
                }
            }

            if(index !== -1){
                let indexChild = -1;
                for(let i =0; i < this.filterStore.selectedFilters[index].filters.length; i++ ){
                    if(parseInt(this.filterStore.selectedFilters[index].filters[i].id) === parseInt(innerFilter.id)){
                        indexChild = i;
                        break;
                    }
                }

                if(indexChild !== -1){
                    innerFilter.selected = false;
                    this.filterStore.setRemSelectedFilters(parseInt(index), parseInt(indexChild));
                    this.filterStore.setFilteredProducts(this.applicaFiltri())
                }

            }
        },
        applicaFiltri() {
            return this.filterStore.getProducts().filter(prodotto => {
                return  this.filterStore.getSelectedFilters().every(filtro => {
                    const filtroProdotto = prodotto.filters.find(p => parseInt(p.typeFilter) === parseInt(filtro.parentId));
                  
                    if (filtroProdotto) {
                        return filtro.filters.some(idFiltro => filtroProdotto.filters.includes(idFiltro.id));
                    } else {
                        return false;
                    }
                });
            })
        },
        countFilters(data){
            let filter = this.filterStore.getSelectedFilters().find((f) => parseInt(f.parentId) === parseInt(data.parentId));
            
            if(filter && filter.countSelected !== 'undefined'){
                return filter.countSelected;
            }

            return null;
        }
    }
}

</script>


<style scoped>
.filter-counter {
    color: black;
    margin-left: 15px;
    padding: 0 10px;
}

.selected {
    background-color: #d3d3d3;
    font-weight: bolder;
}

.filter-container, .inner-filter-container {
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    flex-direction: row;
    align-items: center;
}

.filter-container {
    height: 70px;
    border-bottom: 1px solid lightgray;
}

.inner-filter-container {
    height: 55px;
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

.filter {
    border: 1px solid lightgray;
    padding: 10px;
    min-width: 150px;
    height: 50px;
    margin: 0 5px;
    display: flex;
    justify-content: space-between;
}

.inner-filter {
    border: 1px solid lightgray;
    padding: 5px 10px;
    height: 35px;
    margin: 0 5px;
    flex:none;
}
</style>