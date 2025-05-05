<script lang="ts" setup>
import { useThemeConfig } from 'valaxy-theme-yun/composables/index.ts'
import { ref } from 'vue';

const content = ref(useThemeConfig().value.notice.content);
</script>

<template>
    <div class="w-full px-4 flex-center">
      <div class="yun-notice w-full">
        <span
        class="i-mdi-bullhorn-outline pt-10 inline float-left -rotate-16"
        text="black dark:white 2xl"
        /><span v-html="content" class="inline"/>
        <slot />
      </div>
    </div>
</template>
  
<style>
  .yun-notice {
    border: 1px solid var(--va-c-text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--va-font-serif);
    font-weight: bold;
    padding: 1rem;
    max-width: var(--yun-post-card-max-width);
    background-color: rgba(201, 201, 201, 0.1);
    backdrop-filter: blur(var(--lin-say-blur));
  }
</style>