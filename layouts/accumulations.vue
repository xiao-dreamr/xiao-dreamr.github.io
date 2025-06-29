<script setup lang="ts">
import LinAccumulations from "~/components/accumulations/LinAccumulations.vue";
</script>

<template>
    <YunLayoutWrapper>
        <div flex="~ col" class="pt-0 lg:px-5rem md:px-3rem sm:px-0">
            <LinAccumulations />
        </div>
    </YunLayoutWrapper>
    <YunFooter/>
</template>