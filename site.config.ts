import { defineSiteConfig } from 'valaxy'


export default defineSiteConfig({
  url: 'https://xiao-dreamr.github.io/',
  lang: 'zh-CN',
  title: '霖的小屋 ο(=•ω＜=)ρ⌒☆',
  author: {
    name: '霖',
    avatar: 'https://avatars.githubusercontent.com/u/189501925?v=4',
    status:{emoji: '🟢',message: '在线...?'}
  },
  subtitle: '',
  lastUpdated:true,
  description: '庄生晓梦迷蝴蝶',
  favicon:'https://pic.imgdb.cn/item/675ce224d0e0a243d4e3c64f.png',
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
  
})
