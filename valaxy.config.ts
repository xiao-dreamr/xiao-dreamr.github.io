import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need 
const safelist = [
  'i-ri-home-line','i-ri-gallery-view'
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
      url:"https://linium.xin/images/LightBackground.jpg",
      dark:"https://linium.xin/images/DarkBackground.jpg",   //"https://img.picui.cn/free/2024/12/11/6759b4f393e96.png"
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
    pages:[{
      name:"项目橱窗",
      url:"/projects",
      icon:"i-ri-gallery-view",
    },
    {
      name:"逆旅余音",
      url:"/accumulations",
      icon:"i-ri-pen-nib-fill",
    }
    ],
    nav:[
      {
        text:"导航",
        items:[
          {
            text:"项目橱窗",
            link:"/projects",
            icon:"i-ri-gallery-view",
          },
        ]
      }
    ],
    footer: {
      since: 2024,
      icon: {
        enable: false,
      },
    },
    notice:{
      enable:true,
      content:"博主开学了，随缘更新(o゜▽゜)o☆",
    }
  },
  addons:[
    addonWaline({
      serverURL:"https://comment.linium.xin/",
      comment:true,
    }),
  ],
  unocss: { safelist },
  markdown:{
    theme: {
      light: 'catppuccin-mocha',
      dark: 'catppuccin-latte'
    },
  }
})
