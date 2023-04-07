module.exports = {
    base: '/blog/', // 比如你的仓库是test
    title: 'Breathe',
    description: 'Just playing around',
    head: [
      ['link', { rel: 'icon', href: '/public/logo2.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav:[
        { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
        { text: '博客', link: 'https://www.yuque.com/breathe/tbthd4' }, // 外部链接
        // 下拉列表
        {
          text: 'GitHub',
          items: [
            { text: 'GitHub地址', link: 'https://github.com/lzq-dingyuan' },
            {
              text: '图形学学习',
              link: 'https://github.com/tensorflow/graphics'
            }
          ]
        }        
      ]
    }
  }