<script lang="ts" setup>
defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div
    class="post-tags inline-flex" items="center" gap="1"
    flex="wrap 1" justify="end"
  >
    <RouterLink
      v-for="tag, i in tags" :key="i" :to="{ path: '/tags/', query: { tag } }"
      class="transition post-tag inline-flex-center text-xs border-$va-c-divider"
      px-0.5 py-0.7
      rounded-full
      border
      hover="bg-blue-500 text-white"
    >
      <span>{{ tag }}</span>
    </RouterLink>
  </div>
</template>