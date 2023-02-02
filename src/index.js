import { forEach } from 'lodash';

const moduleFiles = import.meta.globEager('./components/**/*.vue');
const components = [];

forEach(moduleFiles, (module) => {
  components.push(module.default);
});

export const createUI = () => ({
  install: (app) => {
    forEach(components, (component) => {
      app.component(component.name, component);
    });
  },
});
