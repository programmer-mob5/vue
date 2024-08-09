<script setup lang="ts">
import InputText from 'primevue/inputtext';
</script>

<template>
  <div class="relative flex w-[364px] h-[34px] items-center">
    <InputText
      class="flex w-[364px] h-[34px] px-[21px] justify-between items-center rounded-[18px] border-searchBorder bg-searchBackground placeholder-searchPlaceHolderText"
      placeholder="Search"
    />
    <img
      alt="Search Icon"
      src="@/assets/img/search.svg"
      class="h-[16px] z-10 w-[16px] absolute right-[21px]"
    />
  </div>
</template>
