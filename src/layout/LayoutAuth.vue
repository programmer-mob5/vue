<script setup lang="ts">
import Toast, { ToastMessageOptions } from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { provide, ref } from 'vue';

const toast = useToast();
const toastMessage = ref<string>();

interface ShowToastParams {
  severity:
    | 'success'
    | 'info'
    | 'warn'
    | 'error'
    | 'secondary'
    | 'contrast'
    | undefined;
  message: string;
}

const showToast = (params: ToastMessageOptions) => {
  toast.add(params);
};

provide('showToast', showToast);
</script>

<template>
  <div class="bg-surfaceVariant w-full h-screen p-6">
    <div class="rounded-3xl bg-generalSidebar flex p-6 h-full">
      <RouterView />
    </div>
  </div>
  <Toast />
</template>
