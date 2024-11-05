<template>
  <button class="gap-2" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot name="left"> </slot>
    <slot name="center"> </slot>
    <slot name="right"> </slot>
    <div
      v-if="hasTooltipContent"
      v-show="isTooltipVisible"
      class="tooltip"
    >
      <slot name="tooltip"></slot>
      <div
        class="tooltip-arrow"
      ></div>
    </div>
  </button>
</template>

<script setup>
import { ref, useSlots } from 'vue'

const slots = useSlots()
const isTooltipVisible = ref(false)
const hasTooltipContent = !!slots.tooltip

const showTooltip = () => {
  if (hasTooltipContent) {
    isTooltipVisible.value = true
  }
}

const hideTooltip = () => {
  isTooltipVisible.value = false
}
</script>

<style lang="css" scoped>
.tooltip {
  @apply absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 min-w-[120px] whitespace-nowrap shadow-xs;
  @apply appearance-none rounded-lg py-2 px-3 bg-white;
  @apply border border-solid border-neutral-100;
}

.tooltip-arrow {
  @apply absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-b border-r border-neutral-100 shadow-xs;
}
</style>
