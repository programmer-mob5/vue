<script setup lang="ts">
import AssetsModuleHeader from '@/components/modules/AssetModule/AssetsModuleHeader.vue';
</script>

<template>
  <div>
    <AssetsModuleHeader />
    <div class="bg-surfaceVariant2 h-screen px-[24px] py-[12px] text-[12px] font-bold">
      <RouterView />
    </div>
  </div>
</template>
