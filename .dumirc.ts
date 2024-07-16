import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  themeConfig: defineThemeConfig({
    name: 'Document',
    title: 'Custom Component Library',
    logo: '/logo.svg',
    rtl: false,
    description: 'This is a custom component library for React',
    footer: false,
    nav: [
      { title: '组件', link: '/src' },
      { title: '文档', link: '/guide' },
    ],
  }),
});
