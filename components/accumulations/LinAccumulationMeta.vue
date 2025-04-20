<script setup lang="ts">
import { AccumulationItem } from './AccumulationTypes';

const fm = defineProps<{
    accumulation:AccumulationItem,
    color?:string
}>()

const content = (fm.accumulation.content??"").replaceAll('|','<br/>').replaceAll(')','&#12288&#12288')

const author = fm.accumulation.author
const period = fm.accumulation.period

</script>

<template>
    <div class="inline-flex-center gap-1 m-2">
        <span class="text-sm text-gray-500">〔{{period}}〕</span>
        <span class="text-sm text-gray-500">{{ author }}</span>
    </div>
    <div 
        class="inline-flex-center text-lg accumulation-content leading-relaxed mx-9" 
        v-html="content"
        :style="`color:${color}`"
    />
</template>

<style lang="scss">
.accumulation-content{
  font-family: "LXGW WenKai";
  font-weight: normal;
}
</style>