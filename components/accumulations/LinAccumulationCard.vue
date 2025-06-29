<script setup lang="ts">
import { AccumulationItem } from './AccumulationTypes';
import { useMotion} from '@vueuse/motion';
import { ref,type CSSProperties,computed} from 'vue';
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

const card = ref<HTMLElement>()
useMotion(card, {
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
  styles.backgroundColor = 'rgba(255,255,255,0.9)'
  if (!styles.color)
    styles.color = 'black'
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
  <div v-for="(content, index) in contents" class="flex">
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 80,
        scale: 0.9
      }"
      :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
      transition: {
          type: 'spring',
          stiffness: 250,
          damping: 20,
          mass: 1.3,
          delay: index * 200
        }
      }"
      :hovered="{
        scale: 1.05
      }"
      flex="~ col center"
      display="inline-grid"
      class="m-5 rounded shadow-lg p-2 accumulation-card"
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

<style lang="scss" scoped>
.accumulation-card{
  backdrop-filter: blur(var(--lin-bg-blur));
}

.accumulation-content{
  font-family: 'STDongGuanTi';
  font-weight: normal;
  color: rgb(0, 0, 0)
}

.accumulation-author{
  font-family: 'Noto Serif SC', serif;
}
</style>