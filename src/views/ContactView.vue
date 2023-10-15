<template>
    <div class="contact">
        <MainMenu></MainMenu>
        <ContactHeaderSection></ContactHeaderSection>
        <ContactContentSection></ContactContentSection>
        <ContactMapSection></ContactMapSection>
        <Footer></Footer>
    </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import ContactHeaderSection from '@/components/ContactComponents/ContactHeaderSection.vue';
import ContactContentSection from '@/components/ContactComponents/ContactContentSection.vue';
import ContactMapSection from '@/components/ContactComponents/ContactMapSection.vue';


export default {
    name: 'ContactView',
    components: {
        MainMenu,
        Footer,
        ContactHeaderSection,
        ContactContentSection,
        ContactMapSection
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');


</style>