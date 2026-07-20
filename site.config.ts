import { defineSiteConfig } from 'valaxy'


export default defineSiteConfig({
  url: 'https://linium.xin/',
  lang: 'zh-CN',
  title: '霖的小屋 ο(=•ω＜=)ρ⌒☆',
  timezone: 'Asia/Shanghai',
  author: {
    name: '霖',
    avatar: 'https://linium.xin/images/lin.png',
    status:{emoji: '🎓',message: '自强不息，厚德载物'}
  },
  subtitle: '',
  lastUpdated:true,
  description: 'Per aspera, Ad astra.',
  favicon:'https://linium.xin/images/lin-favicon.png',
  comment:{
    enable:true,
  },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/xiao-dreamr',
      icon: 'i-ri-github-line',
      color: '#8250df',
    },
    {
      name: 'Bilibili',
      link: 'https://space.bilibili.com/502814741',
      icon: 'i-ri-bilibili-line',
      color: '#fb7299',
    }
  ],
  statistics:{
    enable:true,
  },
  sponsor:{
    enable: false,
  },
  search: {
    enable: true,
  },
  frontmatter:{
    isPost: true,
    author: '霖',
    aplayer: true,
    toc: true,
    codeHeightLimit: 400,
    sponsor: false,
  },
  mediumZoom:{enable:true},
  codeHeightLimit: 500,
})
