<template>
    <div class="about-content-container">
        <div class="pre-row container">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-8 col-sm-6 col-md-6 col-lg-7 col-xl-7 col-xxl-7">
                            <div class="text-container">
                                <div class="title-container">
                                    <div class="title">
                                        <h5>Il Nostro Viaggio con l'Intimo Femminile</h5>
                                    </div>
                                </div>
                                <div class="text-content-container">
                                    <div class="content">
                                        <div>
                                            La nostra storia inizia con una profonda passione per l'intimo femminile.
                                            Siamo stati ispirati a creare un luogo dove ogni donna possa trovare l'intimo
                                            che fa risaltare la sua bellezza naturale.
                                            Ogni pezzo nella nostra collezione è stato scelto con amore e cura,
                                            riflettendo il desiderio di rendere ogni giorno un po' più speciale.
                                            Dalle morbide pizze ai set intimi sensuali, ogni capo racconta una storia
                                            di fiducia e autostima.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 col-sm-6 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                            <div class="image-container">
                                <div class="image-background">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-8 col-sm-6 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                            <div class="image-container">
                                <div class="image-background">

                                </div>
                            </div>
                        </div>
                        <div class="col-8 col-sm-6 col-md-6 col-lg-7 col-xl-7 col-xxl-7">
                            <div class="text-container">
                                <div class="title-container">
                                    <div class="title">
                                        <h5> I Nostri Pigiami, il Tuo Riposo Meritato</h5>
                                    </div>
                                </div>
                                <div class="text-content-container">
                                    <div class="content">
                                        <div>
                                            Per noi, il sonno è sacro. Abbiamo creato la nostra gamma di pigiami con il
                                            vostro comfort e
                                            benessere in mente. Ogni notte, quando indossate uno dei nostri pigiami,
                                            speriamo che possiate sentire
                                            il calore e la tranquillità che solo il vostro rifugio personale può offrire.
                                            I nostri pigiami morbidi e accoglienti sono progettati per coccolarvi e farvi
                                            sentire a vostro agio.
                                            Che siate fan dei tessuti morbidi o delle fantasie divertenti, abbiamo quello
                                            che fa per voi.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-8 col-sm-6 col-md-6 col-lg-7 col-xl-7 col-xxl-7">
                            <div class="text-container">
                                <div class="title-container">
                                    <div class="title">
                                        <h5>Dettagli che Fanno la Differenza</h5>
                                    </div>
                                </div>
                                <div class="text-content-container">
                                    <div class="content">
                                        <div>
                                            Gli accessori sono ciò che completa un outfit e lo rende unico.
                                            Nel nostro negozio, crediamo che i dettagli siano fondamentali. Ogni gioiello,
                                            cintura o borsa è stato
                                            scelto con attenzione ai dettagli, per aggiungere un tocco di eleganza e stile a
                                            ogni giornata.
                                            Abbiamo selezionato ogni pezzo con l'intento di rendere i vostri momenti
                                            speciali ancora più luminosi.
                                            Ogni accessorio racconta una storia di bellezza e individualità.

                                            Speriamo che questa versione più personale rifletta meglio la storia e
                                            la filosofia del tuo negozio, creando un legame più profondo con i tuoi clienti.
                                            Sentiti libero di adattarla ulteriormente per soddisfare le esigenze specifiche
                                            del tuo marchio.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 col-sm-6 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                            <div class="image-container">
                                <div class="image-background">

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
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    text-align: center;
}

.text-content-container {
    margin: 15px 0;
    padding: 25px;
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
    height: 100%;
    background-image: url('../../assets/imgs/about-placeholder.jpg');
    background-size: cover;
    background-position: center center;
}

.col-7 {
    display: flex;
    align-items: center;
}

.pre-row>.row>.col-12>.row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pre-row>.row>.col-12:nth-child(2) {
    background-color: #E0E0E0;
}

@media screen and (max-width: 992px) {
    .image-background {
        width: 85%
    }
}

@media screen and (max-width: 768px) {
    .image-background {
        width: 95%
    }
}

@media screen and (max-width: 576px) {
    .image-background {
        width: 100%;
    }
}
</style>