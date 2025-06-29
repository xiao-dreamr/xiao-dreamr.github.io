<script setup lang="ts">
import { useFrontmatter, usePageList } from 'valaxy';
import { AccumulationItem } from './AccumulationTypes';
import { ref,computed} from 'vue';
import LinAccumulationCard from './LinAccumulationCard.vue';

/**
 * 获取所有AccumulationItem的列表
 */
function useAccumulationList(params: {
  type?: string
} = {}) {
  const pageList = usePageList()
  return computed(() => {
    const routes = pageList.value
      .filter(i =>
        i.path?.startsWith('/accumulations')
        && !(i.path === '/accumulations')
        && !i.path?.endsWith('.html')
        && i.date
        && (!params.type || i.type === params.type)
        && (!i.hide || i.hide === 'index'), // hide `hide: all` posts
      )

    // 按index排序
    const topAccmulations = routes.filter(i => i.index).sort((a,b) =>  (b.index??0)-(a.index??0) )
    const otherAccumulations = routes.filter(i => !i.index).sort(() => Math.random()-0.5)

    return topAccmulations.concat(otherAccumulations)
  })
}

const fm = useFrontmatter();

//const comment = ref(fm.value.comment);

const notice = ref(fm.value.notice);

const accumulations = useAccumulationList().value as AccumulationItem[]
</script>

<template>
    <div class="w-full px-4 flex-center m-1.5rem">
      <div class="yun-notice w-full">
        <span v-html="notice" />
        <slot />
      </div>
    </div>
    <div class="flex justify-center flex-wrap flex-1">
        <LinAccumulationCard v-for="accu,i in accumulations" :accumulation="accu" :i="i" class="flex"/>
    </div>
</template>

<style lang="scss" scoped>

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