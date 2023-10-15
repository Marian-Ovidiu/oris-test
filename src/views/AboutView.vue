<template>
  <div class="about">
    <MainMenu></MainMenu>
    <h1>This is an about page</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'AboutView',
  components: {
    MainMenu,
    Footer
  }
}
</script>