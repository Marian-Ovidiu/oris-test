<template>
    <div class="contact">
        <MainMenu></MainMenu>
        <Header :title="'Contatti'" :image="'../../assets/imgs/header-3.jpeg'"></Header>
        <ContactContentSection></ContactContentSection>
        <ContactMapSection></ContactMapSection>
        <Footer></Footer>
    </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/GlobalComponents/Header.vue';
import ContactContentSection from '@/components/ContactComponents/ContactContentSection.vue';
import ContactMapSection from '@/components/ContactComponents/ContactMapSection.vue';


export default {
    name: 'ContactView',
    components: {
        MainMenu,
        Footer,
        Header,
        ContactContentSection,
        ContactMapSection
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');


</style>