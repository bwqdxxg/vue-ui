module.exports = {
  // 组件库名称
  name: 'bwqdxxg-ui',
  // 构建配置
  build: {
    srcDir: 'src',
    namedExport: true,
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/bwqdxxg-ui/',
    },
  },
  // 文档站点配置
  site: {
    // 标题
    title: 'bwqdxxg-ui',
    // 图标
    logo: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8zZTVkNWRjNzY2YzczYjgxM2U4YTkxZDViMzI5MmFlMT9zaXplPTUwJmRlZmF1bHQ9cmV0cm8ifQ.ZX3UKI2x1KC7Zd0P6EtwLexV9Kbq9yQP7AzKGzEDOZI', // 'https://img.yzcdn.cn/vant/logo.png',
    // 描述
    description: '轻量、可靠的 Vue 组件库',
    links: [
      {
        logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/youzan/vant',
      }
    ],
    // 左侧导航
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '快速上手',
          }
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          }
        ],
      },
    ],
  },
};
