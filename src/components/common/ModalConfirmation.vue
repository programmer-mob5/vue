<script setup lang="ts">
import ButtonFilled from './ButtonFilled.vue';
import { ButtonVariant } from '@/types/buttonFilled.type';
import ButtonText from './ButtonText.vue';
import { ButtonTextVariant } from '@/types/buttonTextVariant.type';
</script>

<template>
  <div
    class="w-[400px] p-[24px] flex flex-col gap-[12px] rounded-[8px] bg-generalSidebar text-generalTextLabel shadow-modal"
  >
    <div class="flex gap-[8px]">
      <img alt="waring logo" src="@/assets/img/warning_rounded.svg" />
      <h1 class="text-generalTextLabel text-[14px] font-bold tracking-[0.28px]">
        Delete Asset
      </h1>
    </div>
    <p class="text-generalTextLabel text-[12px] font-medium tracking-[0.28px]">
      AC Portable Standing- 36 will be deleted. Are you sure you want to delete
      it?
    </p>
    <div class="flex justify-end items-center gap-[4px]">
      <ButtonText
        text-label="Cancel"
        :button-variant="ButtonTextVariant.Black"
      />
      <ButtonFilled :button-variant="ButtonVariant.Error" text-label="Create" />
    </div>
  </div>
</template>
