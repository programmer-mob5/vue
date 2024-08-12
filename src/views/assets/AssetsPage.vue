<script setup lang="ts">
import AssetsServices from '@/services/assets.service';
import AssetsModuleBody from '@/components/modules/AssetModule/AssetsModuleBody.vue';
import { onMounted, ref } from 'vue';
import getAssets from '@/components/modules/helpers/getAssets.helper';
import GetAssetsResponse from '@/dto/assets/response/GetAssetsResponse.dto';
import AssetsModel from '@/dto/assets/model/AssetsModel';
import AssetsMapper from '@/dto/assets/mapper/AssetsMapper';

const assetsData = ref<AssetsModel[]>();
const totalRecords = ref<number>();

onMounted(async () => {
  const data = await getAssets();
  if (!data) {
    console.log(data);
  } else {
    assetsData.value = AssetsMapper(data);
    totalRecords.value = data.data.totalRecords
  }
});
</script>

<template>
  <div>
    <p>Assets</p>
    <AssetsModuleBody :assets="assetsData" :total-records="totalRecords" />
  </div>
</template>
