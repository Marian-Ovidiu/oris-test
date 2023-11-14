<template>
    <div>
      <div class="map-container">
        <button @click="openGoogleMaps" class="open-map">Apri Google Maps</button>
        <div class="flat-map">
          <iframe id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.084042457115!2d7.852314975901281!3d44.6974830710718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2ab73f694c1c7%3A0x1ade6ff186db7015!2sDA%20ORIS!5e0!3m2!1sit!2sit!4v1699644692990!5m2!1sit!2sit"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      openGoogleMaps() {
        const url = 'https://maps.google.com/maps?ll=44.697483,7.85489&z=16&t=m&hl=it&gl=IT&mapclient=embed&cid=1936107972956221461';
        window.open(url, '_system');
      }
    }
  }
  </script>
  
  <style scoped>
  .flat-map {
    width: 80vw;
    padding: 20px 0;
    margin: auto;
  }
  .map-container {
    display: flex;
    flex-direction: column;
  }
  #map {
    height: 400px;
    width: 100%;
  }

  .open-map {
    margin: auto;
    padding: 5px 15px;
    border: 1px solid lightgray;
  }
  </style>
  