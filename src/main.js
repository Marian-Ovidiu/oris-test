import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faEnvelope, faMapMarker, faPhone, faInstagram, faFacebook, faTiktok, faWindowClose);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);


app.use(store).use(router).mount('#app');
