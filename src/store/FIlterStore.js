
import { defineStore } from 'pinia';
import { database } from '@/classes/database.js';

export const useFilterStore = defineStore('filterStore', {
  state: () => ({
    filters: [],
    products: [],
    selectedFilter: [],
    selectedFilters: [],
    selectedProducts: []
  }),
  actions: {
    setData() {
        const db = new database();
        this.filters = db.getFilters();
        this.products = db.getProducts();
    },
    setSelectedFilter(id){
        this.selectedFilter = this.filters.find((f) => parseInt(f.parentId) === parseInt(id))
    },
    setAddSelectedFilters(filter = []){
        if (filter !== []) {
            this.selectedFilters.push(filter);

            let index = this.filters.findIndex((f) => parseInt(f.parentId) === parseInt(filter.parentId));
            if(index !== -1){
                this.filters[index].selected = true;
            }

            let findedCounter =  this.selectedFilters.findIndex((f) => parseInt(f.parentId) === parseInt(filter.parentId));
            if(findedCounter !== -1){
                this.selectedFilters[findedCounter].countSelected = 1;
            }
        } else {
            this.selectedFilters = [];
        }
    },
    setAddSelectedChildFilters(parentPos, filter){
        this.selectedFilters[parentPos].filters.push(filter);
        this.selectedFilters[parentPos].countSelected = this.selectedFilters[parentPos].filters.length;
    },
    setRemSelectedFilters(parentPos, childPos){
        let index = this.filters.findIndex((f) => parseInt(f.parentId) === parseInt(this.selectedFilters[parentPos].parentId));
        if(index !== -1){
            if(this.selectedFilters[parentPos].filters.length < 2){
                this.filters[index].selected = false;
            }
            this.selectedFilters[parentPos].filters.splice(''+childPos+'', 1);
        }

        if(this.selectedFilters[parentPos].filters.length <= 0){
            this.selectedFilters.splice(parentPos, 1);
        }

        if(typeof this.selectedFilters[parentPos] !== 'undefined'){
            this.selectedFilters[parentPos].countSelected = this.selectedFilters[parentPos].filters.length;
        }
    },
    setFilteredProducts(p){
        this.selectedProducts = p;
    },
    getProducts(){
        return this.products;
    },
    getFilters(){
        return this.filters;
    },
    getSelectedFilter(){
        return this.selectedFilter;
    },
    getSelectedFilters(){
        return this.selectedFilters;
    },
    getSelectedProducts(){
        return this.selectedProducts;
    },
    getProductById(id){
        return this.getProducts().find((f) => f.productId == parseInt(id));
    },
    getFilterById(id){
        return this.getFilters().find((f) => f.parentId == parseInt(id));
    }
  },
});
