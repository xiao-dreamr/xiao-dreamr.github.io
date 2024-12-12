import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

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
      dark:"https://img.picui.cn/free/2024/12/11/6759b4f393e96.png"
    },
    say:{
      enable:true,
      api:"https://el-bot-api.elpsy.cn/api/words/young",
      hitokoto:{
        enable:true,
        api:"https://el-bot-api.elpsy.cn/api/words/young",
      }
    },
    footer: {
      since: 2021,
      icon: {
        enable: false,
      },
      beian: {
        enable: false,
        icp:"",
      },
    },
  },

  unocss: { safelist },
})
