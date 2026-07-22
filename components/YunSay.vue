<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useThemeConfig } from 'valaxy-theme-yun/composables/index.ts'

const themeConfig = useThemeConfig()

const sayContent = ref('')
const sayAuthor = ref('')
const sayFrom = ref('')
const displayedContent = ref('')
const authorLine = ref('')
const isTypingDone = ref(false)

const quotes = ref<Array<{ content: string; author: string; from: string }>>([])
const currentQuoteIndex = ref(0)
const isLeaving = ref(false)
const containerMinHeight = ref('')

const sayRef = ref<HTMLElement | null>(null)

let typewriterTimer: ReturnType<typeof setInterval> | null = null
let cycleTimer: ReturnType<typeof setTimeout> | null = null

function clearTimers() {
  if (typewriterTimer) {
    clearInterval(typewriterTimer)
    typewriterTimer = null
  }
  if (cycleTimer) {
    clearTimeout(cycleTimer)
    cycleTimer = null
  }
}

/**
 * 打字机特效：先打正文，再打作者行
 */
function runTypewriter(
  text: string,
  author: string,
  from: string,
  onDone: () => void,
) {
  clearTimers()
  displayedContent.value = ''
  authorLine.value = ''
  isTypingDone.value = false

  let i = 0
  const textSpeed = 120

  typewriterTimer = setInterval(() => {
    if (i < text.length) {
      displayedContent.value += text[i]
      i++
    }
    else {
      // 正文打完，开始打作者行
      if (typewriterTimer) {
        clearInterval(typewriterTimer)
        typewriterTimer = null
      }

      if (author) {
        const fullAuthor = from ? `${from} · ${author}` : author
        let j = 0
        const authorSpeed = 50
        typewriterTimer = setInterval(() => {
          if (j < fullAuthor.length) {
            authorLine.value += fullAuthor[j]
            j++
          }
          else {
            if (typewriterTimer) {
              clearInterval(typewriterTimer)
              typewriterTimer = null
            }
            isTypingDone.value = true
            onDone()
          }
        }, authorSpeed)
      }
      else {
        isTypingDone.value = true
        onDone()
      }
    }
  }, textSpeed)
}

/**
 * 显示当前索引的语录并启动打字机
 */
function showCurrentQuote() {
  const quote = quotes.value[currentQuoteIndex.value]
  if (!quote)
    return

  sayContent.value = quote.content
  sayAuthor.value = quote.author
  sayFrom.value = quote.from

  runTypewriter(quote.content, quote.author, quote.from, () => {
    // 打字完成后停留 20s，切换下一句
    cycleTimer = setTimeout(() => {
      nextQuote()
    }, 20000)
  })

  // 打字开始后逐步释放 min-height
  setTimeout(() => {
    containerMinHeight.value = '0px'
  }, 200)
}

/**
 * 切换到下一句（带离开动画 + 高度过渡）
 */
function nextQuote() {
  clearTimers()

  // 记录当前容器高度，锁定 min-height 防止塌陷
  if (sayRef.value) {
    containerMinHeight.value = `${sayRef.value.offsetHeight}px`
  }
  isLeaving.value = true

  setTimeout(() => {
    // 先清空旧内容，再移除离开状态，避免旧内容回弹
    displayedContent.value = ''
    authorLine.value = ''
    isTypingDone.value = false
    isLeaving.value = false

    if (themeConfig.value.say.hitokoto.enable) {
      fetchHitokoto(themeConfig.value.say.hitokoto.api)
    }
    else {
      if (quotes.value.length > 0) {
        currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.value.length
        showCurrentQuote()
      }
    }
  }, 400)
}

/**
 * 获取 hitokoto 单条语录
 */
function fetchHitokoto(api: string) {
  fetch(api)
    .then((res) => {
      if (res.ok)
        return res.json()
      throw new Error(`HTTP error, status = ${res.status}`)
    })
    .then((data) => {
      quotes.value = [{
        content: data.hitokoto,
        author: data.from_who || '',
        from: data.from || '',
      }]
      currentQuoteIndex.value = 0
      showCurrentQuote()
    })
    .catch((err) => {
      console.error(err.message)
    })
}

/**
 * 获取在线 API 语录
 */
function fetchApiToSay() {
  if (themeConfig.value.say.hitokoto.enable) {
    const api = themeConfig.value.say.hitokoto.api
    if (!api)
      return
    fetchHitokoto(api)
    return
  }

  const api = themeConfig.value.say.api
  if (!api)
    return

  fetch(api)
    .then((res) => {
      if (res.ok)
        return res.json()
      throw new Error(`${api}, HTTP error, status = ${res.status}`)
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        console.error('API response is not an array')
        return
      }
      quotes.value = data
        .filter((s: any) => s && s.content)
        .map((s: any) => ({
          content: s.content,
          author: s.author || '',
          from: s.from || '',
        }))
      if (quotes.value.length > 0) {
        currentQuoteIndex.value = Math.floor(Math.random() * quotes.value.length)
        showCurrentQuote()
      }
    })
    .catch((err) => {
      console.error(err.message)
    })
}

onMounted(() => {
  fetchApiToSay()
})

onUnmounted(() => {
  clearTimers()
})
</script>

<template>
  <div
    ref="sayRef"
    class="say backdrop-blur-$lin-say-blur bg-white/5"
    :style="{ minHeight: containerMinHeight || undefined }"
  >
    <div class="say-inner">
      <div class="say-body" :class="{ 'say-leaving': isLeaving }">
        <span v-if="displayedContent" class="say-content">
          「 {{ displayedContent }}<span v-if="!isTypingDone" class="say-cursor" />
          」
        </span>
        <span
          v-if="sayAuthor"
          class="say-author"
          :style="{ visibility: authorLine ? 'visible' : 'hidden' }"
        >{{ authorLine || '&nbsp;' }}</span>
      </div>
      <button
        v-if="isTypingDone && !isLeaving"
        class="say-next-btn"
        title="下一句"
        @click="nextQuote"
      >
        ↻
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.say {
  color: var(--va-c-text);
  display: block;
  text-align: center;
  font-family: var(--va-font-serif);
  font-weight: bold;
  padding: 1.5rem;
  border-bottom: var(--va-border-width) solid var(--va-c-text-light);
  transition: min-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.say-inner {
  display: flex;
  align-items: center;
}

.say-body {
  flex: 1;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.say-leaving {
    opacity: 0;
    transform: translateY(12px);
  }
}

.say-content {
  display: block;
}

.say-author {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9em;
  opacity: 0.8;
}

.say-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  background-color: var(--va-c-text);
  vertical-align: text-bottom;
  animation: cursor-blink 0.8s step-end infinite;
}

.say-next-btn {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  padding: 0;
  border: 1px solid var(--va-c-text-light);
  border-radius: 50%;
  background: transparent;
  color: var(--va-c-text);
  font-size: 0.9rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
    transform: rotate(180deg);
  }
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
