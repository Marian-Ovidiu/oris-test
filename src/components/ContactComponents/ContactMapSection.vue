<template>
    <div class="map-container">
        <div class="flat-map">
            <iframe id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177.25544446185413!2d7.8549760919597595!3d44.697420412963055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2ab73f694c1c7%3A0x1ade6ff186db7015!2sDA%20ORIS!5e0!3m2!1sit!2sit!4v1697370660784!5m2!1sit!2sit"
                style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.flat-map {
    width: 80vw;
    padding: 20px 0;
    margin: auto;
}

#map {
    height: 400px;
    width: 100%;
}
</style>