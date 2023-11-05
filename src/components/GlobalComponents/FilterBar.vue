<template>
    <div class="row">
        <div class="col-12 filter-container">
            <div class="filter" v-for="(filter, index) in localFilters" :key="index"
                :class="{ 'selected': filter.selected }" @click="toggleMainFilter(filter)">
                {{ filter.label }}
                <span v-if="filter.childFiltersCounter"
                    style="background-color: black; color: white; margin-left: 5px; padding: 3px">{{
                        filter.childFiltersCounter }}</span>
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
export default {
    name: 'FilterBar',
    emits: ['toggleMainFilterEvent'],
    props: [
        'filters',
        'selectedFilter',
        'selectedFilters',
        'isPopupOpen'
    ],
    data() {
        return {
            localFilters: this.filters,
            localSelectedFilter: this.selectedFilter,
            localSelectedFilters: this.selectedFilters,
            localIsPopupOpen: this.isPopupOpen
        }
    },
    watch: {
        isPopupOpen(data) {
            this.localIsPopupOpen = data;
        },
        filters: {
            immediate: true,
            handler(newFilters) {
                this.localFilters = newFilters;
            }
        },
        selectedFilters(data) {
            this.localSelectedFilters = data;
        }
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
            this.localSelectedFilter = filter;
            
            let selected = this.localSelectedFilters.find((f) => f.parentId === filter.parentId);

            if (!selected) {
                this.localSelectedFilters.push(filter);
            }

            selected = this.localSelectedFilters.find((f) => f.parentId === filter.parentId);

            if ('childFilters' in selected && selected.childFilters.length > 0) {
                filter.selected = true;
            } else {
                filter.selected = false;
            }

            this.localIsPopupOpen = true;

            this.$emit('toggleMainFilterEvent', {
                selectedFilter: this.localSelectedFilter,
                selectedFilters: this.localSelectedFilters,
                isPopupOpen: this.localIsPopupOpen
            });
        },
        getInnerFilters(){
            return this.innerFilters;
        },
        deleteInnerFilter(innerFilter){
            const parentComponent = this.$parent;
            parentComponent.deleteInnerFilter(innerFilter);
        }
    }
}

</script>


<style scoped>
.selected {
    background-color: lightgray;
    font-weight: bolder;
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
</style>