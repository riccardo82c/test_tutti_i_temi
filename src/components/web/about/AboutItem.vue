<template>

  <div class="bg-white h-full w-full relative ">
    <div class=" text-white px-4 max-w-screen-xl m-auto mb-0 ">
      <div class="flex flex-col items-start justify-center font-web lead min-h-svh">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">

          <div class="flex flex-col gap-8">

            <div class="flex pills-container">
              <badge-item class="badge-b badge-lg badge-info self-start">
                <template #center>{{ $t('about.pill') }}</template>
              </badge-item>
            </div>

            <h2 class="font-web text-[48px] leading-[57px] text-primary text-mobile-desktop-switch">{{ $t('about.title') }}</h2>
            <div class="flex justify-center">
              <p class="max-w-screen-sm font-body text-body text-mobile-desktop-switch">{{ $t('about.subtitle') }}</p>
            </div>

            <div class="flex w-full button-container gap-4 mt-10">
              <img src="@/assets/images/download-apple.svg" alt="download_apple" class="cursor-pointer h-10">
              <img src="@/assets/images/download-google.svg" alt="download_google" class="cursor-pointer h-10">
            </div>
          </div>

          <div class="hero-image-container flex justify-center">
            <img src="@/assets/images/about.svg" alt="about_image" class="about_image hidden lg:block">
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="bg-neutral-50 relative z-10 px-2 md:px-0">
    <div class="max-w-screen-xl mx-auto py-24 px-2 md:px-0">
      <!-- Griglia di card -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="item, index in aboutItems" :key="index"
          class="p-6 border-[1px] border-primary rounded-2xl bg-white ">
          <img :src="getImageUrl(item.id)" class="h-10 w-10" :alt="`${item.id}_icon`" />
          <p class="text-md font-semibold mt-2">{{ item.title }}</p>
          <p class="text-neutral-600 text-md mt-2">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import BadgeItem from '@/components/ui-kit/badges/BadgeItem.vue'


const aboutItems = computed(() => [
  {
    id: 1,
    title: t('about.about_cards.1.title'),
    text: t('about.about_cards.1.subtitle')
  },
  {
    id: 2,
    title: t('about.about_cards.2.title'),
    text: t('about.about_cards.2.subtitle')
  },
  {
    id: 3,
    title: t('about.about_cards.3.title'),
    text: t('about.about_cards.3.subtitle')
  },
  {
    id: 4,
    title: t('about.about_cards.4.title'),
    text: t('about.about_cards.4.subtitle')
  },
  {
    id: 5,
    title: t('about.about_cards.5.title'),
    text: t('about.about_cards.5.subtitle')
  },
  {
    id: 6,
    title: t('about.about_cards.6.title'),
    text: t('about.about_cards.6.subtitle')
  }

])

// Importa tutte le immagini SVG dalla cartella assets/icons/about
const images = import.meta.glob('@/assets/icons/about/*.svg', { eager: true });

// Funzione per ottenere l'URL dell'immagine
const getImageUrl = (icon) => {
  const path = `/src/assets/icons/about/${icon}.svg`;
  return images[path]?.default;
};


</script>

<style lang="css" scoped>
.about_image {
  position: absolute;
  right: -12%;
  bottom: -12%;
  min-width: 60%;
  /* width: 70%; */

  @media screen and (max-width: 1140px) {
    max-width: 700px;
  }
}

.pills-container {
  @apply justify-center lg:justify-start;
}

.text-mobile-desktop-switch {
  @apply text-center md:text-left;
}

.button-container {
  @apply justify-center md:justify-start;
}
</style>
