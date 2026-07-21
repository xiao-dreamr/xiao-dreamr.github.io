<script setup lang="ts">
import { ref } from 'vue'
import { useThemeConfig } from 'valaxy-theme-yun/composables/index.ts'

const themeConfig = useThemeConfig()

const showContent = ref(false)
</script>

<template>
  <div
    flex="~ col"
    class="yun-square-container items-center justify-center text-center max-w-2xl  backdrop-blur-$lin-bg-blur py-10 px-7 shadow-2xl bg-white/5 -z-1 relative"
  >
    <!-- Border drawing animation: four edges extend clockwise from each corner -->
    <div class="yun-border-lines pointer-events-none absolute inset-0 z-0">
      <div class="border-line line-top" />
      <div class="border-line line-right" />
      <div class="border-line line-bottom" />
      <div class="border-line line-left" />
    </div>
    <slot />

    <div
      flex="~ col center"
      class="info-with-avatar relative duration-800 transition-cubic-bezier-ease-in"
      :class="{
        show: showContent,
      }"
    >
      <Transition
        enter-from-class="enter-from"
        enter-to-class="enter-to"
        appear
        @after-appear="showContent = true"
      >
        <div
          flex="~ col"
          class="yun-square square-rotate z-1 bg-white/80"
        >
          <LineBurstEffects
            class="absolute top-0 left-0 right-0 bottom-0 size-full scale-200"
            :delay="200"
            :duration="400"
          />
          <Transition
            enter-from-class="op-0"
            enter-to-class="op-100"
            enter-active-class="transition-400 delay-400"
            appear
          >
            <YunAuthorAvatar />
          </Transition>
        </div>
      </Transition>

      <div
        class="info"
        :class="{
          show: showContent,
        }"
      >
        <YunAuthorName class="mt-3" />
        <YunAuthorIntro />

        <div class="py-4 md:py-5 lg:pt-6">
          <YunAnimLineDraw />
        </div>
        <div
          flex="~ col"
          class="gap-2 items-center justify-center"
        >
          <YunSiteTitle />
          <YunSiteSubtitle />
          <YunSiteDescription />
        </div>
        <div class="scale-x--100 py-4 md:py-5 lg:pb-6">
          <YunAnimLineDraw />
        </div>

        <YunSocialLinks />

        <div
          class="mt-4 flex-center w-72 md:w-150 m-auto gap-2"
          flex="~ wrap"
        >
          <YunSiteLinkItem
            :page="{
              name: '博客文章',
              icon: 'i-ri-article-line',
              url: '/posts/',
            }"
          />
          <slot />
          <YunSiteLinkItem
            v-for="item, i in themeConfig.pages"
            :key="i" :page="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// use scoped for css injection
@use 'sass:map';
@use 'valaxy-theme-yun/styles/vars.scss' as *;

.yun-square {
  transition: all 0.8s map.get($cubic-bezier, 'ease-in');
  border-radius: 50%;
  transform: rotate(0deg) translateY(0%);
  width: var(--avatar-size);
  height: var(--avatar-size);
  box-shadow: 0 5px 100px rgb(0 0 0 / 0.15);

  &.enter-from {
    border-radius: 0%;
    // width: var(--total-char-height);
    // height: var(--total-char-height);
    transform: rotate(135deg) translateY(0%);
    box-shadow: none;
  }
}

.yun-border-lines {
  .border-line {
    position: absolute;
    background-color: var(--va-c-text);

    // Light mode: slightly thicker
    &.line-top,
    &.line-bottom {
      height: 1px;
    }
    &.line-right,
    &.line-left {
      width: 1px;
    }

    // Dark mode: thinner
    @media (prefers-color-scheme: dark) {
      &.line-top,
      &.line-bottom {
        height: 0.5px;
      }
      &.line-right,
      &.line-left {
        width: 0.5px;
      }
    }

    // Top edge: starts from top-left, extends right
    &.line-top {
      top: 0;
      left: 0;
      width: 0;
      animation: yun-border-extend-w 1.2s map.get($cubic-bezier, 'ease-in') 0.2s forwards;
    }

    // Right edge: starts from top-right, extends down
    &.line-right {
      top: 0;
      right: 0;
      height: 0;
      animation: yun-border-extend-h 1.2s map.get($cubic-bezier, 'ease-in') 0.2s forwards;
    }

    // Bottom edge: starts from bottom-right, extends left
    &.line-bottom {
      bottom: 0;
      right: 0;
      width: 0;
      animation: yun-border-extend-w 1.2s map.get($cubic-bezier, 'ease-in') 0.2s forwards;
    }

    // Left edge: starts from bottom-left, extends up
    &.line-left {
      bottom: 0;
      left: 0;
      height: 0;
      animation: yun-border-extend-h 1.2s map.get($cubic-bezier, 'ease-in') 0.2s forwards;
    }
  }
}

@keyframes yun-border-extend-w {
  to { width: 100%; }
}
@keyframes yun-border-extend-h {
  to { height: 100%; }
}

.yun-square-container {
  --avatar-size: 100px;

  .info-with-avatar {
    position: relative;
  }

  .info {
    position: relative;
    opacity: 0;
    transform: translateY(0);
    transition: all 0.8s map.get($cubic-bezier, 'ease-in');

    &.show {
      opacity: 1;
      // transform: translateY(calc(50% + var(--avatar-size) / 2));
    }
  }
}
</style>
