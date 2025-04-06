<script setup lang="ts">
import { AccumulationItem } from './AccumulationTypes';
import {useMotion} from '@vueuse/motion';
import { ref,type CSSProperties,computed} from 'vue';
import { TinyColor } from '@ctrl/tinycolor';
import AppLink from 'valaxy/client/components/AppLink.vue'
//import LinAccumulationTags from './LinAccumulationTags.vue';

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
    accumulation: AccumulationItem,
    color?:string
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

//.replaceAll('|','<br/>&#12288&#12288')

const contents = computed(() => {
  if(!props.accumulation.essence){
    var content_:string
    content_ = props.accumulation.content.replaceAll('|','<br/>&#12288&#12288')
    return [content_]
  }else{
    var content_list:string[] = []
    for(let i=0;i<props.accumulation.essence.length;i++){
      content_list.push(props.accumulation.essence[i].replaceAll('|','<br/>&#12288&#12288'))
    }
    return content_list
  }
})
</script>

<template>
  <div v-for="content in contents" class="flex">
    <div
      ref="cardRef"
      flex="~ col center"
      display="inline-grid"
      class="m-5 transform rounded shadow-md p-2 accumulations-card"
      hover="shadow-lg"
      :style="cardStyle"
    >
      <AppLink :to="props.accumulation.path">
        <div herf="content" class="m-5 text-xl accumulation-content" v-html="content"/>
      </AppLink>
      <div v-if="props.accumulation.author" class="m-3 text-xs text-gray-500 w-full text-right accumulation-author">
        —— <span v-if="props.accumulation.period">〔{{props.accumulation.period}}〕</span>{{ props.accumulation.author }}
          <span v-if="props.accumulation.source"> · {{ props.accumulation.source }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fontsapi.zeoseven.com/2/main/result.css");

.accumulation-content{
  font-family: 'LXGW ZhenKai', serif;
  color: rgb(0, 0, 0)
}

.accumulation-author{
  font-family: 'Noto Serif SC', serif;
}
</style>