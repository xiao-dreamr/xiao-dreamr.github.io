import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  themeConfig: {
    banner: {
      enable: true,
      title: '霖的小屋',
      cloud:{
        enable: true,
      },
    },
    bg_image:{
      enable : true,
      url:"https://pic.imgdb.cn/item/675cd5e7d0e0a243d4e3c51f.png",
      dark:"https://pic.imgdb.cn/item/675c4ab9d0e0a243d4e3bc96.png",   //"https://img.picui.cn/free/2024/12/11/6759b4f393e96.png"
      opacity:0.75,
    },
    say:{
      enable:true,
      api:"https://v1.hitokoto.cn?c=i&encode=json",
      hitokoto:{
        enable:true,
        api:"https://v1.hitokoto.cn?c=i&encode=json",
      }
    },
    footer: {
      since: 2024,
      icon: {
        enable: false,
      },
    },
  },
  addons:[
    addonWaline({
      serverURL:"https://comment.linium.xin/",
      comment:true,
      pageview:true,
    }),
  ],
  unocss: { safelist },
})
