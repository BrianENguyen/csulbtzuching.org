import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { BootstrapVue } from 'bootstrap-vue';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/app.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount('#app');
