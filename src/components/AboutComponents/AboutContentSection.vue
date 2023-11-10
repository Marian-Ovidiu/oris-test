<template>
    <div class="about-content-container">
        <div class="pre-row container">
            <div class="row">
                <div class="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <div class="text-container">
                        <div class="title-container">
                            <div class="title">
                                <h5>Stile e Comfort nel Cuore di Bra</h5>
                            </div>
                        </div>
                        <div class="text-content-container">
                            <div class="content">
                                <div>
                                    Negozio storico a Bra, aperto dal 1982.
                                    Con una selezione raffinata di pigiami e intimo
                                    per uomo, donna e bambino, ogni capo tessuto racconta una storia di eleganza e
                                    comfort, dove stile e qualità si incontrano. Vieni a dare un'occhiata e scoprire di più!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AboutContentSection',
    components: {

    }
}
</script>

<style scoped>
.about-content-container {
    font-family: 'Playfair Display', serif;
    width: 100vw;
    margin: auto;
}

.title-container {
    height: 100px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    text-align: center;
}

.text-content-container {
    margin: 15px 0;
    padding-bottom: 25px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container {
    width: 100%;
    height: 425px;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-background {
    width: 75%;
    height: 70%;
    background-image: url('../../assets/imgs/real-slider-1.jpeg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}

.col-7 {
    display: flex;
    align-items: center;
}

.pre-row>.row{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>