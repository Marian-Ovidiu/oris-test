<template>
    <div class="row related-container">
        <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 content-products"
        v-for="(product, index) in productsVisualizzati" :key="index">
            <ProductRelatedCard :product="product"></ProductRelatedCard>
        </div>
    </div>
</template>

<script>

import ProductRelatedCard from '@/components/GlobalComponents/ProductRelatedCard.vue';
import { useFilterStore } from '@/store/FIlterStore';

export default {
    name: 'RelatedSection',
    setup: function(){
        const filterStore = useFilterStore();
        return {filterStore};
    },
    mounted() {
        this.filterStore.setData();
        this.$data.productsVisualizzati = JSON.parse(JSON.stringify(this.filterStore.getProducts()));

        let  currentIndex = -1;
        for(let i in this.$data.productsVisualizzati){
            if(parseInt(this.$data.productsVisualizzati[i].productId) === parseInt(this.$route.params.id_product)){
                currentIndex = i;
                break;
            }
        }


        if(currentIndex !== -1){
            this.$data.productsVisualizzati.splice(currentIndex, 1);
        }

        this.$data.productsVisualizzati.slice(0, 12);
    },
    components: {
        ProductRelatedCard
    },
    data() {
        return {
            products: [],
            productsVisualizzati: [],
            productsPerVolta: 12,
            inizio: 12
        };
    },
    watch: {
    	'$route.params.id_product': 'updateRelated'
  	},
    methods: {
        updateRelated(){
            let  currentIndex = -1;
            let prds  =  JSON.parse(JSON.stringify(this.filterStore.getProducts()));
            for(let i in prds){
                if(parseInt(prds[i].productId) === parseInt(this.$route.params.id_product)){
                    currentIndex = i;
                    break;
                }
            }

            if(currentIndex !== -1){
              prds.splice(currentIndex, 1);
            }

            this.productsVisualizzati = prds.slice(0, 12);
        }
    }
}
</script>

<style scoped>
.related-container{
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.related-container::-webkit-scrollbar{
    display: none;
}

.content-products {
    min-width: 150px;
    display: flex;
    justify-content: space-between;
}

</style>