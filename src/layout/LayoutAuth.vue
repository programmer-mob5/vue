<script setup lang="ts">
import ToastNotif from '@/components/common/ToastNotif.vue';
import { ToastNotifVariant } from '@/types/ToastNotifVariant.type';
</script>

<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="bg-surfaceVariant w-full h-screen p-6">
    <div class="rounded-3xl bg-generalSidebar flex p-6 h-full">
      <RouterView />
    </div>
  </div>
  <ToastNotif
    class="absolute top-10 right-6"
    toast-message="asdasda"
    :toast-variant="ToastNotifVariant.SUCCESS"
  />
</template>
