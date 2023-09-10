import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { packageNames } from './nodeExternals';

//@ts-ignore
const resolve = url => path.resolve(__dirname, url);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve('./src/components'),
      '@server': resolve('./src/server'),
      '@pages': resolve('./src/pages'),
      '@language': resolve('./src/language'),
      '@hooks': resolve('./src/hooks'),
      '@theme': resolve('./src/theme'),
      '@layout': resolve('./src/layout'),
      '@stores': resolve('./src/stores'),
      '@utils': resolve('./src/utils'),
      '@config': resolve('./src/config'),
      '@less': resolve('./src/less'),
      '@images': resolve('./src/assets/images'),
      '@icons': resolve('./src/icons'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 省略扩展名
  },
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false,
        },
        {
          libName: 'antd',
          style(name) {
            // use less
            return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:5]',
    },
    preprocessorOptions: {
      less: {
        // 支持内联 javascript
        javascriptEnabled: true,
      },
    },
  },
  // 入口
  build: {
    outDir: 'dist-ssr',
    // 移除console.log
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //   },
    // },
    rollupOptions: {
      external: [...packageNames],
    },
    lib: {
      //@ts-ignore
      entry: path.resolve(__dirname, 'src/ssr.tsx'),
      name: 'ssr',
      formats: ['umd'],
      fileName: format => `ssr.${format}.js`,
    },
  },
  base: '/', // 公共基础路径
});
