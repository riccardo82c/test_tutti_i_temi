<template>
  <div class="bg-error-100 border border-error-400 text-error-600 px-4 py-3 rounded-lg relative" role="alert">
    <strong class="font-bold">Errore!</strong>
    <span class="block sm:inline ml-2">{{ text }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    default: 'Si è verificato un errore'
  },
})

</script>
