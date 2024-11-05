<template>

  <div class="notfoundpage-wrapper px-2 text-body font-body text-xl">
    <div>

      <h1 class="title is-spaced mb-2 ">Ops...</h1>
      <div class="p-2 mb-2">page not found</div>

      <ButtonItem class="btn btn-lg btn-tertiary" @click="goHome">
        <template #center>
          <span>Torna alla home</span>
        </template>
      </ButtonItem>

    </div>
  </div>

</template>

<script setup>
import router from '@/router'
import ButtonItem from '@/components/ui-kit/buttons/ButtonItem.vue';

const goHome = () => router.push({ name: 'home' })

</script>

<style scoped>

.notfoundpage-wrapper {
  height: calc(100vh - 128px);

  @include mobile {
    height: calc(100vh - 220px);
  }

  display: grid;

  &>div {
    place-self: center;
    text-align: center;
  }

  button {
    min-width: 240px;
  }
}
</style>
