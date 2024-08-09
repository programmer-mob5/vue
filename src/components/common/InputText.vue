<script setup lang="ts">
import InputText from 'primevue/inputtext';
defineProps<{
  textFieldTitle?: string;
  isRequired?: boolean;
}>();

const inputDataModel = defineModel();

</script>

<template>
  <div class="w-[420px] text-field-text bg-white h-[69px] flex-col gap-2">
    <div class="flex gap-[2px] h-[22px]">
      <p class="text-base text-field_title">{{ textFieldTitle }}</p>
      <span class="text-fieldRequired mr-[2px]">*</span>
    </div>
    <div>
      <div>
        <InputText
          v-model="inputDataModel"
          :feedback="false"
          class="w-full bg-fieldBackground"
        />
      </div>
    </div>
  </div>
</template>
