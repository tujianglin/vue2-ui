import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { createUI } from '../../dist/ui.es';
import '../../dist/style.css';

export default ({ Vue }) => {
  Vue.use(createUI());
  Vue.use(ElementUI);
};
