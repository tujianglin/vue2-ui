const nav = require('./configs/nav');
const sidebar = require('./configs/sidebar');

module.exports = {
  title: '9.3组件文档库',
  description: '基于Element-ui二次封装基础组件示例',
  base: '/vue2-ui/',
  themeConfig: {
    repoLabel: 'GitHub',
    nav,
    sidebar,
  },
};
