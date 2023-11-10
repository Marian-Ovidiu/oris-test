<template>
  <div class="about">
    <MainMenu></MainMenu>
    <Header :title="'Su di noi'"></Header>
    <AboutContentSection></AboutContentSection>
    <Footer></Footer>
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'
import Footer from '../components/Footer.vue'
import Header from '@/components/GlobalComponents/Header.vue';
import AboutContentSection from '@/components/AboutComponents/AboutContentSection.vue';

export default {
  name: 'AboutView',  
  components: {
    MainMenu,
    Footer,
    Header,
    AboutContentSection
  }
}
</script>