<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
import { useAppStore } from 'valaxy'
import { computed } from 'vue'

const props = defineProps<{
  social: {
    name: string
    link: string
    icon: string
    color: string
  }
  // animation
  delay: number
}>()

const iconRef = ref<HTMLElement>()
useMotion(iconRef, {
  initial: {
    scale: 0.8,
    x: 0,
    y: 20,
    opacity: 0,
  },
  enter: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 20000,
      damping: 8,
      delay: props.delay,
    },
  },
})
const appStore = useAppStore()
const color = computed(() => {
  return (appStore.isDark && props.social.color === 'black') ? 'white' : props.social.color
})
</script>

<template>
  <div
    v-tooltip="social.name"
    class="size-10 inline-flex-center"
  >
  <a
    class="links-of-author-item yun-icon-btn"
    rel="noopener" :href="social.link" :title="social.name"
    target="_blank"
    :style="`color:${color}`"
  >
    <div class="icon size-7 gap-2" :class="social.icon" />
  </a>
  </div>
</template>
