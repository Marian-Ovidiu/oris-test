<template>
    <router-link :to="'/product/'+product.productId" class="router product-content">
            <div class="product-img" :style="'background-image: url(' + product.imageUrl + ');'"></div>
            <div class="product-details">
                <div class="product-title">
                    <div><strong> {{ product.name }}</strong></div>
                </div>
                <div class="product-description">
                    <div>{{ truncatedDescription }}</div>
                </div>
                <div class="product-price">
                    €<div>{{ product.price }}</div>
                </div>
            </div>
    </router-link>
</template>

<script>
export default {
    name: 'ProductCart',
    props: ['product'],
    computed: {
        truncatedDescription() {
            if (this.product.description.length > 26) {
                return this.product.description.slice(0, 26) + "...";
            } else {
                return this.product.description;
            }
        },
    },
}
</script>

<style scoped>

.router {
    text-decoration: none;
    color:black;
}
.product-content {
    width: 100%;
    height: 300px;
    margin: 10px auto;
}

.product-img {
    width: 100%;
    height: 75%;
    margin: auto;
    background-size: cover;
    background-position: center center;
}

.product-details {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
}

.product-title {
    width: 100%;
}

.product-title > div > strong {
    font-size: 13px;
}

.product-description {
    font-size: 10px;
}

.product-price {
    padding: 5px 0;
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    font-size: 10px;
}
/* 
@media screen and (max-width: 568px) {
    .product {
        width: 178px;
        height: 376px;
    }

    .product-img {
        height: 255px;
    }

    .product-details {
        height: 121px;
    }
}

@media screen and (min-width: 1000px) {
    .product {
        height: 425px;
    }
}*/

@media screen and (min-width: 1200px) {
    .product-content {
        width: 90%;
    }

}

@media screen and (min-width: 1450px) {
    .product-content {
        width: 80%;
    }

}

</style>