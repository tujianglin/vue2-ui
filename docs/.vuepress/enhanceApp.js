import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../dist/style.css';

export default async ({ Vue }) => {
  Vue.use(ElementUI);
  await import('../../dist/ui.es').then(({ createUI }) => {
    Vue.use(createUI());
  })
};
