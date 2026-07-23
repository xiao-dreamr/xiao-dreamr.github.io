<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('https://events.vercount.one/js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div>本站总访问量 <span id="vercount_value_site_pv" /> 次 | 本站访客数 <span id="vercount_value_site_uv" />人次</div>
    <div><a href="https://icp.gov.moe/?keyword=20252312" target="_blank">萌ICP备20252312号</a></div>
  </YunFooter>
</template>