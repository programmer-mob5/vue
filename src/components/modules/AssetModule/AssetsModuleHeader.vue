<script setup lang="ts">
import LogoBase from '@/components/common/LogoBase.vue';
import AssetsModuleSearch from './AssetsModuleSearch.vue';
import Button from 'primevue/button';
import ButtonTextIcon from '@/components/common/ButtonTextIcon.vue';
import ThemeSwitch from '@/components/common/ThemeSwitch.vue';
import { MenuItem } from 'primevue/menuitem';
import SplitButton from 'primevue/splitbutton';

const language: MenuItem[] = [
  {
    label: 'Indonesia',
  },
  {
    label: 'English',
  },
];
</script>

<template>
  <div
    class="px-[24px] py-[8px] bg-headerBackground flex justify-center items-center"
  >
    <LogoBase class="mr-[40px]" />
    <div class="flex gap-[20px] items-center">
      <img
        src="@/assets/img/burger_menu.svg"
        alt="Burger Menu"
        class="h-[26px] w-[26px] flex justify-center items-center"
      />
      <AssetsModuleSearch />

      <div class="flex items-center gap-[2px] ml-[130px]">
        <Button severity="info" class="h-[26px]">
          <p class="text-[12px] font-medium">Quick Action</p>
        </Button>

        <ButtonTextIcon text-label="Sync" icon="sync.svg" />
        <Button severity="info" class="h-[26px]">
          <div class="flex justify-center items-center gap-[4px]">
            <img class="h-[12px] w-[12px]" src="@/assets/img/scan.svg" alt="" />
            <p class="text-[12px] font-medium">Scan by Tag</p>
          </div>
        </Button>
      </div>
      <ThemeSwitch class="ml-[8px]" />
      <div class="flex items-center gap-[8px]">
        <SplitButton
          :model="language"
          class="border-none bg-transparent"
          outlined
        >
          <span class="flex items-center font-bold">
            <img
              alt="logo"
              src="@/assets/img/icons/flag/flag_indonesia.svg"
              style="height: 1rem; margin-right: 0.5rem"
            />
          </span>
        </SplitButton>
        <div class="relative">
          <img
            alt="notification Icons Menu"
            src="@/assets/img/icons/notification/notification_bell.svg"
          />
          <img
            alt="notification Icons Indicator"
            class="absolute top-0 left-0"
            src="@/assets/img/icons/notification/notification_Indicator.svg"
          />
        </div>
        <img src="@/assets/img/user_profile.png" />
      </div>
    </div>
  </div>
</template>
