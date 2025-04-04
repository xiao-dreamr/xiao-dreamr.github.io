<script setup lang="ts">
import { AccumulationItem } from './AccumulationTypes';
import {useMotion} from '@vueuse/motion';
import { ref,type CSSProperties,computed} from 'vue';
import { TinyColor } from '@ctrl/tinycolor';

const cubicBezier: Record<string, [number, number, number, number]> = {
  /**
   * 慢速开始，然后加速
   */
  easeIn: [0.18, 0.66, 0.05, 0.96],
  /**
   * 慢速开始和结束
   */
  easeInOut: [0.77, 0, 0.17, 1.02],
}

const props = defineProps<{
    i:number,
    accumulation: AccumulationItem
}>();

const cardRef = ref<HTMLElement>()
useMotion(cardRef, {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: props.i * 50,
      type: 'spring',
      ease: cubicBezier.easeIn,
      damping: 8,
      duration: 400,
    },
  },
})
const cardStyle = computed(() => {
  const styles: CSSProperties={
    writingMode: props.accumulation.align,
  }
  if (props.accumulation.color && (typeof props.accumulation.gradient === 'undefined' || props.accumulation.gradient)) {
    const color = new TinyColor(props.accumulation.color)
    styles['--un-gradient-stops'] = `${color.spin(55).toHexString()}, ${props.accumulation.color}`
    if (!styles.color)
      styles.color = color.isDark() ? 'white' : 'black'
  }
  else {
    styles.backgroundColor = props.accumulation.color || 'rgba(255,255,255,0.9)'
    if (!styles.color)
      styles.color = 'black'
  }
  if(!props.accumulation.align){
    styles.writingMode = 'vertical-rl'
    styles.letterSpacing = '0.2em'
  }else{
    styles.writingMode = props.accumulation.align
  }
  return styles;
})

const content = ref(
  props.accumulation.content.replaceAll('|','<br/>&#12288&#12288')
)

</script>

<template>
  <div
    ref="cardRef"
    flex="~ col center"
    display="inline-grid"
    class="m-5 transform rounded shadow-md p-2 accumulations-card"
    hover="shadow-lg translate-y-8 scale-110"
    :style="cardStyle"
  >
    <div herf="content" class="m-5 text-xl accumulation-content" v-html="content"/>
    <div v-if="props.accumulation.author" class="m-3 text-xs text-gray-500 w-full text-right accumulation-author">
      —— <span v-if="props.accumulation.period">〔{{props.accumulation.period}}〕</span>{{ props.accumulation.author }}
        <span v-if="props.accumulation.source"> · {{ props.accumulation.source }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fontsapi.zeoseven.com/2/main/result.css");

.accumulation-content{
  font-family: 'LXGW ZhenKai', serif;
}

.accumulation-author{
  font-family: 'Noto Serif SC', serif;
}
</style>