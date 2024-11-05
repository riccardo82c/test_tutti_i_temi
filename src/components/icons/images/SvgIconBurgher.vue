<template>
  <svg :width="width" :height="height" fill="none" :stroke="color" viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '#2D3648'
  },
  height: {
    type: Number,
    default: 24,
  },
  width: {
    type: Number,
    default: 24,
  },
})
</script>
