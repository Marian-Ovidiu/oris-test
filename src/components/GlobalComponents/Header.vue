<template>
    <div class="about-header" :style="'background-image: url(\''+image+'\')'">
      <div class="about-dark-mask">
        <div class="title-header-about">
          <p>{{title}}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: [
        'title',
        'image'
    ],
    components: {}
  }
  </script>
  
  <style scoped>
  .about-header {
    font-family: 'Playfair Display', serif;
    width: 100vw;
    height: 250px;  
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .about-dark-mask {
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  .title-header-about {
    text-align: center;
    margin: 0;
    font-size: 1rem;
    padding: 0 25px;
  }
  
  .title-header-about p {
    margin: 0;
    font-size: 1.2em;
    opacity: 0.8;
    color: white;
  }
</style>

  