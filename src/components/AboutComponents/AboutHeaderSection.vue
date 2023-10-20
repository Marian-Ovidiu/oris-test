<template>
    <div class="about-header">
      <div class="about-dark-mask">
          <div class="title-header-about">
            <h1>Su di noi</h1>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'AboutHeaderSection',
  components: {
   
  }
}

</script>

<style scoped>

.about-header {
  font-family: 'Playfair Display', serif;
  width: 100vw;
  height: 350px;  
  background-image: url('../../assets/imgs/contact-header.png');
  background-size: cover;
  background-position: center center;
}

.about-dark-mask {
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  
}
</style>