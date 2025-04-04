<script setup lang="ts">
import { useFrontmatter } from 'valaxy';
import { AccumulationItem } from './AccumulationTypes';
import { reactive } from 'vue';
import { ref } from 'vue';
import LinAccumulationCard from './LinAccumulationCard.vue';

const fm = useFrontmatter();
const accumulations = reactive(fm.value.accumulations as AccumulationItem[]);
accumulations.sort((a,b) =>  (b.index??0)-(a.index??0) );
// 按index排序
const notice = ref(fm.value.notice);
</script>

<template>
    <div class="w-full px-4 flex-center m-3">
      <div class="yun-notice w-full">
        <span v-html="notice" />
        <slot />
      </div>
    </div>
    <div class="flex justify-center flex-wrap">
        <LinAccumulationCard v-for="accu,i in accumulations" :accumulation="accu" :i="i" />
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
    backdrop-filter: blur(var(--lin-bg-blur));
  }
</style>