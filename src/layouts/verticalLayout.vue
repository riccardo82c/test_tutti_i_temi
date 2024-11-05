<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-r from-primary-500 to-primary-700">
    <div class="shrink w-full fixed z-30">
      <NavbarItem></NavbarItem>
    </div>
    <div class="grow h-full w-full">
      <RouterView />
    </div>
    <div class="shrink">
      <div class="max-w-screen-xl mx-auto">
        <Footer></Footer>
      </div>
    </div>
  </div>

</template>

<script setup>
import NavbarItem from '@/components/navbar/NavbarItem.vue';
import Footer from '@/components/web/Footer.vue'
</script>

<style lang='css'></style>
