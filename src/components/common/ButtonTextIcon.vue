<script setup lang="ts">
import Button from 'primevue/button';

const props = defineProps<{
  textLabel: string;
  icon: string;
}>();

const iconPath =`src/assets/img/${props.icon}`;
</script>
<template>
  <Button severity="info" outlined class="h-[26px]">
    <div class="flex justify-center items-center gap-[4px]">
      <img class="h-[12px] w-[12px]" :src="iconPath" alt="" />
      <p class="text-[12px] font-medium">{{ textLabel }}</p>
    </div>
  </Button>
</template>
