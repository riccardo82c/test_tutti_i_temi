<template>
  <div class="relative">
    <select ref="selectBoxRef" :value="modelValue" @input="$emit('update:modelValue', parseInt($event.target.value))"
      @mousedown="handleMouseDown" @change="handleChange" class="form__input form__input__full border-none"
      :class="!modelValue && 'text-neutral-400'">
      <option disabled value="" class="text-neutral-400">Scegli la categoria</option>
      <option v-for="option in options" :value="option.categoryId" :key="option.categoryId" class="text-body">
        {{ option.categoryName }}
      </option>
    </select>
    <div class="absolute top-2 right-0 flex items-center px-2 pointer-events-none">
      <svg-icon-chevron-up v-if="isOpen"></svg-icon-chevron-up>
      <svg-icon-chevron-down v-else></svg-icon-chevron-down>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useClickOutside from '@/composable/useClickOutside';

import SvgIconChevronDown from '@/components/icons/images/SvgIconChevronDown.vue';
import SvgIconChevronUp from '@/components/icons/images/SvgIconChevronUp.vue';

const props = defineProps({
  modelValue: [Number, String],
  options: Array
});

const selectBoxRef = ref()

const emit = defineEmits(['update:modelValue', 'openChange']);

const isOpen = ref(false);

const handleMouseDown = () => {
  isOpen.value = true;
  emit('openChange', true);
};

const handleChange = () => {
  isOpen.value = false;
  emit('openChange', false);
};

useClickOutside(
  selectBoxRef,
  () => {
    if (isOpen.value) isOpen.value = false
  }, ''
)
</script>
