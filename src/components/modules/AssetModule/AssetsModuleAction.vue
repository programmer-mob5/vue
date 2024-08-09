<script setup lang="ts">
import SplitButton from 'primevue/splitbutton';
import { AssetsModuleSingleAction } from 'src/components/modules/AssetModule/model/AssetsModuleSingleAction';

const singleActionOptions = defineModel();
const props = defineProps<{
  textValue: string;
}>();
const emit = defineEmits<{
  save: [options: AssetsModuleSingleAction];
}>();

const singleActions = [
  {
    label: 'Detail',
  },
  {
    label: 'Edit',
  },
  {
    label: 'Delete',
  },
];
</script>
<template>
  <p></p>
  <SplitButton
    :label="textValue"
    :model="singleActions"
    @click="emit"
    text
  ></SplitButton>
</template>
