import Vue from 'vue';
import i18n from '@/locale';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { createUI } from '../index';

Vue.use(ElementUI);
Vue.use(createUI());

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app');
