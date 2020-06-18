module.exports = {
  title: 'Niles\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)

 ['link', { rel: 'manifest', href: '/photo.jpg' }],
  ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],



  ],

serviceWorker: true,

 themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/NilesKio/vuepressBlog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: '搭建心得', link: '/blog/haha1.md' }
        ]

  sidebar: [
      ['/', '首页'],
      ['/blog/haha1.md', '搭建心得']
    ]

​    }







  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
};