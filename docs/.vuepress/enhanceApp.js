import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import 'element-ui/lib/theme-chalk/index.css';
import { createUI } from '../../dist/ui.es';
import '../../dist/style.css';

export default ({ Vue }) => {
  Vue.use(VueI18n);
  Vue.use(createUI());
  Vue.use(ElementUI);
};
