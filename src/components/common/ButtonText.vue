<script setup lang="ts">
import { ButtonTextVariant } from '@/types/buttonTextVariant.type';

const props = defineProps<{
  textLabel?: string;
  buttonVariant: ButtonTextVariant;
}>();

const buttonVariantStyle = ['text-buttonDark', 'text-primary500'][
  props.buttonVariant
];
</script>

<template>
  <button
    :class="[
      buttonVariantStyle,
      'flex p-[12px] justify-center items-center gap-[4px] self-stretch rounded-[4px]',
    ]"
  >
    {{ textLabel }}
  </button>
</template>
