<script setup lang="ts">
import type { PageProps } from 'valaxy-theme-yun/types/index.ts'
import { useYunAppStore } from 'valaxy-theme-yun/stores/index.ts'

defineProps<{
  page: PageProps
}>()

const yunApp = useYunAppStore()
</script>

<template>
  <AppLink
    class="link-item inline-flex-center gap-2 transition text-lg p-2 md:(text-lg p-2) lg:p-3 text-$va-c-text"
    inline-flex
    :to="page.url" :title="page.name"
    :style="`color:${page.color}`"
    hover="bg-white/50 dark:(bg-black/30) shadow-md"
    @click="yunApp.fullscreenMenu.isOpen = false"
  >
    <div :class="page.icon" class="icon" />
    <span>
      {{ page.name }}
    </span>
  </AppLink>
</template>
