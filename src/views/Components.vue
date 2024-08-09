<script setup lang="ts">
import ToastNotif from '@/components/common/ToastNotif.vue';
import ModalConfirmation from '@/components/common/ModalConfirmation.vue';
import { ToastNotifVariant } from '@/types/ToastNotifVariant.type';
</script>

<template>
  <div class="flex flex-col gap-[20px]">
    <div>
      <ToastNotif
        toast-message="Success, asset has been deleted.."
        :toast-variant="ToastNotifVariant.SUCCESS"
      />
      <ToastNotif
        toast-message="Error, failed to delete asset. Please check your connection and try again."
        :toast-variant="ToastNotifVariant.ERROR"
      />
    </div>
    <div><ModalConfirmation /></div>
  </div>
</template>
