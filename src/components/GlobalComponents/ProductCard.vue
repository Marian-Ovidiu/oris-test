<template>
    <div class="product">
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
    </div>
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
.product {
    width: 90%;
    height: 450px;
    margin: 10px auto;
}

.product-img {
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: center center;
}

.product-details {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
}
.product-title {
    width: 100%;
}
.product-description {
    font-size: 14px;
}
.product-price {
    padding: 5px 0;
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
}

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
</style>