<script setup lang="ts">
import AssetsModuleBody from '@/components/modules/AssetModule/AssetsModuleBody.vue';
const datas = [
  {
    code: 'asdasd',
  },
  {
    code: 'Jalan',
  },
];
</script>

<template>
  <div>
    <p>Assets</p>
    <AssetsModuleBody :assets="datas" />
  </div>
</template>
