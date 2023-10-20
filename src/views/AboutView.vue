<template>
  <div class="about">
    <MainMenu></MainMenu>
    <AboutHeaderSection></AboutHeaderSection>
    <AboutContentSection></AboutContentSection>
    <Footer></Footer>
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'
import Footer from '../components/Footer.vue'
import AboutHeaderSection from '@/components/AboutComponents/AboutHeaderSection.vue';
import AboutContentSection from '@/components/AboutComponents/AboutContentSection.vue';

export default {
  name: 'AboutView',  
  components: {
    MainMenu,
    Footer,
    AboutHeaderSection,
    AboutContentSection
  }
}
</script>