<template>
    <div class="row">
        <div class="col-12 filter-container">
            <div class="filter" v-for="(filter, index) in localFilters" :key="index"
                :class="{ 'selected': filter.selected }" @click="toggleMainFilter(filter)">
                <div class="label"> {{ filter.label }}</div>
                <div v-if="filter.childFiltersCounter" class="filter-counter">{{ filter.childFiltersCounter }}</div>
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
        getInnerFilters() {
            return this.innerFilters;
        },
        deleteInnerFilter(innerFilter) {
            innerFilter.selected = false;
            const parentComponent = this.$parent;
            parentComponent.deleteInnerFilter(innerFilter);
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