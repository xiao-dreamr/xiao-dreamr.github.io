import { defineSiteConfig } from 'valaxy'


export default defineSiteConfig({
  url: 'https://linium.xin/',
  lang: 'zh-CN',
  title: '霖的小屋 ο(=•ω＜=)ρ⌒☆',
  author: {
    name: '霖',
    avatar: 'https://linium.xin/images/lin.png',
    status:{emoji: '🔥',message: '寒假作业火烧眉毛（'}
  },
  subtitle: '',
  lastUpdated:true,
  description: '庄生晓梦迷蝴蝶',
  favicon:'https://linium.xin/images/lin-favicon.png',
  comment:{
    enable:true,
  },
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/xiao-dreamr',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
  ],

  search: {
    enable: true,
  },
  frontmatter:{
    isPost:true,
    author:'霖',
    aplayer: true
  },
  mediumZoom:{enable:true}
  
})
