<script setup lang="ts">
import { ButtonVariant } from '@/types/buttonFilled.type';

const props = defineProps<{
  textLabel?: string;
  buttonVariant: ButtonVariant;
}>();

const buttonVariantStyle = ['bg-buttonSuccess', 'bg-buttonDanger'][
  props.buttonVariant
];
</script>

<template>
  <button
    :class="[
      buttonVariantStyle,
      'flex h-[26px] p-[12px] justify-center items-center gap-[4px] rounded-[4px]',
    ]"
  >
    <p class="text-buttonSuccessText">
      {{ textLabel }}
    </p>
  </button>
</template>
