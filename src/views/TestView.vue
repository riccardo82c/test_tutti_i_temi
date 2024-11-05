<template>
  <div class="w-full p-4 bg-white mt-20">
    <h4 class="text-slate-800 text-4xl">TEST PAGE</h4>

    <!-- global emitter -->
    <div class="my-10">
      <button class="btn btn-primary btn-lg" @click="emitEvent">Emit global event</button>
    </div>
    <hr class="my-4" />

    <!-- button class -->
    <div class="w-full" v-if="true">
      <div>
        <h4 class="text-slate-800 text-2xl">primary</h4>
        <div class="flex w-full justify-evenly">
          <!-- test -->
          <button type="submit" class="mt-4 btn-primary btn-xl">
            Button primary
          </button>

          <button type="submit" class="mt-4 btn-primary btn-xl disabled">
            Button disabled
          </button>
        </div>
      </div>
      <hr class="my-4" />
      <div>
        <h4 class="text-slate-800 text-2xl">secondary</h4>
        <div class="flex w-full justify-evenly">
          <button type="submit" class="mt-4 btn-secondary btn-lg">
            Button secondary
          </button>

          <button type="submit" class="mt-4 btn-secondary btn-lg disabled">
            Button secondary
          </button>
        </div>
      </div>

      <hr class="my-4" />
      <div>
        <h4 class="text-slate-800 text-2xl">tertiary</h4>
        <div class="flex w-full justify-evenly">
          <button type="submit" class="mt-4 btn-tertiary btn-md">
            Button tertiary
          </button>

          <button type="submit" class="mt-4 btn-tertiary btn-md disabled">
            Button tertiary
          </button>
        </div>
      </div>

      <hr class="my-4" />
      <div>
        <h4 class="text-slate-800 text-2xl">ghost</h4>
        <div class="flex w-full justify-evenly">
          <button type="submit" class="mt-4 btn-ghost btn-sm">
            Button ghost
          </button>

          <button type="submit" class="mt-4 btn-ghost btn-sm disabled">
            Button ghost
          </button>
        </div>
      </div>
    </div>

    <!-- ButtonItem -->
    <div class="w-full mt-4" v-if="true">
      <ButtonItem class="btn-primary btn-md">
        <!-- <template #left>
          <svg-icon-signal class="icon-medium" />
        </template> -->
        <!-- <template #center> Button </template> -->
        <template #center>
          <svg-icon-right class="icon-medium"></svg-icon-right>
        </template>
      </ButtonItem>

      <ButtonItem class="btn-secondary btn-xl mt-4">
        <template #left>
          <svg-icon-signal class="icon-medium" />
        </template>
        <template #center> Button </template>
        <template #right>
          <svg-icon-right class="icon-medium"></svg-icon-right>
        </template>
      </ButtonItem>

      <ButtonItem class="btn-tertiary btn-xl mt-4">
        <template #left>
          <svg-icon-signal class="icon-medium" />
        </template>
        <template #center> Button </template>
        <template #right>
          <svg-icon-right class="icon-medium"></svg-icon-right>
        </template>
      </ButtonItem>

      <ButtonItem class="btn-ghost btn-xl mt-4">
        <template #left>
          <svg-icon-signal class="icon-medium" />
        </template>
        <template #center> Button </template>
        <template #right>
          <svg-icon-right class="icon-medium"></svg-icon-right>
        </template>
      </ButtonItem>
    </div>

    <!-- BadgeItem -->
    <div class="w-full mt-4">
      <badge-item class="badge-info badge-b badge-sm">
        <template #left>
          <svg-icon-signal class="icon-medium"></svg-icon-signal>
        </template>
        <template #center>Label</template>
        <template #right>
          <svg-icon-right></svg-icon-right>
        </template>
      </badge-item>
    </div>
  </div>
</template>

<script setup>
import { useEmitter } from '@/composable/useEmitter';

import ButtonItem from '@/components/ui-kit/buttons/ButtonItem.vue'
import BadgeItem from '@/components/ui-kit/badges/BadgeItem.vue'

import SvgIconSignal from '@/components/icons/images/SvgIconSignal.vue'
import SvgIconRight from '@/components/icons/images/SvgIconRight.vue'

const emitter = useEmitter()
const emitEvent = () => {
  emitter.emit('show-generic-error-modal', 'test')
}
</script>

<style lang="css" scoped></style>
