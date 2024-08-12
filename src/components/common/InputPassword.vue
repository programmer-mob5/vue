<script setup lang="ts">
import Password from 'primevue/password';

const inputDataModel = defineModel();
</script>

<template>
  <div class="w-[420px] text-field-text bg-white h-[69px] flex-col gap-2">
    <div class="flex gap-[2px] h-[22px]">
      <p class="text-base text-field_title">Password</p>
      <span class="text-fieldRequired mr-[2px]">*</span>
    </div>
    <div>
      <div>
        <Password
          v-model="inputDataModel"
          :feedback="false"
          class="w-full bg-fieldBackground"
          toggleMask
          fluid
        />
      </div>
    </div>
  </div>
</template>
