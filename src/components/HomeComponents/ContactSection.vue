<template>
    <div class="contact-section">
        <div class="contact-title c-section">
            <h1>Hai bisogno di aiuto?</h1>
        </div>
        <div class="contact-description c-section">
            <div class="inner-contact-description">
                Sappiamo quanto sia importante trovare l'abbigliamento perfetto per ogni occasione, ed è per questo che
                siamo qui per te.
            </div>
        </div>
        <div class="contact-button c-section">
            <router-link to="/contact" class="inner-contact-button" style="text-decoration: none;">
                <a style="text-decoration: none;" class="relative w-10 px-5 py-3 overflow-hidden font-medium text-gray-600 rounded-lg group border-none">
                    <span
                        class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                    <span
                        class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200   group-hover:w-full ease border-none"></span>
                    <span
                        class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span
                        class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span
                        class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Per Info e
                        orari</span>
                </a>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ContactSection',
    data() {
        return {

        };
    },
    components: {
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style scoped>
@import '../../assets/css/MainMenuButtons.css';
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.contact-section {
    padding: 15px 0;
    width: 100%;
    font-family: 'Playfair Display', serif;
}

.c-section {
    width: 75%;
    margin: auto;
}

.contact-title {
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
}

.contact-description {
    padding: 10px 0;
}

.inner-contact-description {
    width: 75%;
    text-align: center;
    margin: auto;
}

.contact-button {
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

.inner-contact-button > a {
    text-decoration:none
}

.inner-contact-button {
    padding: 10px 0;
    border-top: 1px solid #374151;
    border-bottom: 1px solid #374151;
}


@media screen and (max-width: 768px) {
    .c-section {
        width: 100%;
        margin: auto;
    }
}
</style>