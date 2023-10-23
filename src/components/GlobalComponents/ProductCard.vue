<template>
    <div class="product">
        <div class="product-img" :style="'background-image: url(' + product.imageUrl + ');'"></div>
        <div class="product-details">
            <div class="product-price">
                €<div>{{ product.price }}</div>
            </div>
            <div class="product-title">
                <div>{{ product.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCart',
    props: ['product']
}
</script>

<style scoped>
.product {
    width: 90%;
    height: 450px;
    margin: auto;
}

@media screen and (max-width: 576px) {
    .product {
        width: 100%;
    }
}

@media screen and (min-width: 1000px) {
    .product {
        height: 425px;
    }
}

@media screen and (min-width: 1450px) {
    .product {
        height: 500px;
        margin: auto;
    }
}

@media screen and (min-width: 1650px) {
    .product {
        height: 550px;
        margin: auto;
    }
}

.product-img {
    width: 100%;
    height: 85%;
    background-size: cover;
    background-position: center center;
}

.product-details {
    width: 100%;
    height: 15%;
    display: flex;
}

.product-price {
    width: 30%;
    height: 100%;
    border-right: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-title {
    width: 70%;
    height: 100%;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>