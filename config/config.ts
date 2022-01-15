import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Weber',
  outputPath: 'docs-dist',
  mode: 'site',
  description: '前端掌握未来',
  menus: {
    '/guide': [
      {
        title: '介绍',
        children: ['guide/index', 'guide/getting-started'],
      },
      {
        title: '写组件 Demo',
        children: ['guide/demo-principle', 'guide/demo-types', 'guide/control-demo-render'],
      },
      {
        title: '控制菜单和路由生成',
        children: [
          'guide/control-route-generate',
          'guide/control-menu-generate',
          'guide/control-nav-generate',
        ],
      },
      {
        title: '更多用法',
        children: ['guide/mode', 'guide/multi-language'],
      },
      {
        title: '配置项',
        children: ['guide/config', 'guide/frontmatter'],
      },
      {
        title: '示例',
        children: ['guide/example'],
      },
    ],
  },
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/liujiayii' }
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
})
