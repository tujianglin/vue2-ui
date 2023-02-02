import { defineConfig } from 'vite'; // 动态配置函数
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';

function resolvePath(dir) {
  return resolve(process.cwd(), '.', dir);
}

export default () =>
  defineConfig({
    server: {
      open: true, //自动打开浏览器
      port: 1567, //端口号
    },
    resolve: {
      // 别名
      alias: {
        '@': resolvePath('./src'),
      },
    },
    plugins: [createVuePlugin()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'ui',
        fileName: (format) => `ui.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  });
