import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://xiao-dreamr.github.io/',
  lang: 'zh-CN',
  title: '霖的小屋 ο(=•ω＜=)ρ⌒☆',
  author: {
    name: '霖',
    avatar: 'https://raw.githubusercontent.com/xiao-dreamr/xiao-dreamr.github.io/refs/heads/main/lin.png',
    status:{emoji: '🟢',message: '在线...?'}
  },
  subtitle: '',
  description: '庄生晓梦迷蝴蝶',
  favicon:'https://raw.githubusercontent.com/xiao-dreamr/xiao-dreamr.github.io/refs/heads/main/icon.png',
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

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  
})
