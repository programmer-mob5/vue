<script setup lang="ts">
import { ToastNotifVariant } from '@/types/ToastNotifVariant.type';
import Toast from 'primevue/toast';

const props = defineProps<{
  toastMessage?: string;
  toastVariant: ToastNotifVariant;
}>();

const toastVariant = [
  {
    bg: 'bg-toastSuccess',
    borderLeft: 'border-toastSuccessText',
    icon: 'success_close.svg',
    text: 'text-toastSuccessText',
  },
  {
    bg: 'bg-toastDanger',
    borderLeft: 'border-toastDangerText',
    icon: 'error_close.svg',
    text: 'text-toastDangerText',
  },
][props.toastVariant];

const iconPath = `src/assets/img/${toastVariant.icon}`;
</script>

<template>
  <div
    :class="[
      toastVariant.bg,
      toastVariant.borderLeft,
      toastVariant.text,
      'w-[496px] rounded-[7px] ',
    ]"
  >
    <div class="flex px-[16px]">
      <p class="p-[12px] flex-1">
        {{ toastMessage }}
      </p>
      <img :src="iconPath" alt="" />
    </div>
  </div>
</template>
