import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginShiki } from '@rspress/plugin-shiki';
export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Laravel Generator',
  lang: 'zh_CN',
  icon: '/laravel-generator.png',
  logo: {
    light: '/laravel-generator-logo.png',
    dark: '/laravel-generator-logo.png',
  },
  plugins: [pluginShiki()],
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Laravel Generator',
      description: 'Laravel Generator Document',
    },
    {
      lang: 'zh_CN',
      label: '简体中文',
      title: 'Laravel Generator',
      description: 'Laravel代码生成器文档',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/foryoufeng/laravel-generator',
      },
      {
        icon: 'bilibili',
        mode: 'link',
        content: 'https://space.bilibili.com/1781911369',
      },
    ],
    locales: [
      {
        lang: 'zh_CN',
        label: '简体中文',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/larafly/generator-doc/tree/main/docs',
          text: '📝 在 GitHub 上编辑此页',
        },
        overview: {
          filterNameText: '过滤',
          filterPlaceholderText: '输入关键词',
          filterNoResultText: '未找到匹配的 API',
        },
      },
      {
        lang: 'en',
        label: 'English',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/larafly/generator-doc/tree/main/docs',
          text: '📝 Edit this page on GitHub',
        },
      },
    ],
  },
});
