import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'cps9.3-ui/dist/style.css'

export default async ({ Vue }) => {
  Vue.use(ElementUI);
  await import('cps9.3-ui').then(({ createUI }) => {
    Vue.use(createUI());
  })
};
