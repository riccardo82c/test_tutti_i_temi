<template>
  <component :is="layout" />
</template>

<script setup>
import { watch, shallowRef } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = shallowRef(null)

watch(route, (v1) => {
  layout.value = v1.meta.layout
})

</script>

<style lang="css" scoped>
html {
  overflow: auto;
}
</style>
