<template>
  <div class="bg-info-100 border border-info-400 text-info-700 px-4 py-3 rounded-lg relative" role="alert">
    <span class="block sm:inline">{{ text }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
})

</script>
