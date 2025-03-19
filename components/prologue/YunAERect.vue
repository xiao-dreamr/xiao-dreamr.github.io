<script setup lang="ts">
import YunAERect from 'valaxy-theme-yun/components/prologue/YunAERect.vue'
</script>

<template>
  <div ref="rectRef" class="absolute ae-blur-rect"/>
  <YunAERect/>
</template>

<style lang="scss">
.ae-blur-rect {
  top: var(--rect-margin);
  left: var(--rect-margin);
  width: calc(100% - var(--rect-margin) * 2);
  height: calc(100% - var(--rect-margin) * 2);
  overflow: hidden;
  backdrop-filter: blur(var(--lin-bg-blur));
  z-index: -1;

  div {
    position: absolute;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--va-c-text);
    }
  }
}
</style>