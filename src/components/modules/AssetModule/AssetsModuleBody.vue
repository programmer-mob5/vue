<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import AssetsModuleAction from './AssetsModuleAction.vue';
defineProps<{
  assets: {
    code: string;
  }[];
}>();
</script>

<template>
  <div class="card p-[24px] mt-[8px] bg-generalSidebar rounded-lg">
    <DataTable class="mt-[24px]" :value="assets">
      <Column field="code" sortable header="Assets"></Column>
      <Column field="code" sortable header="Group">
        <template #body="slotProps">
          <Tag severity="info" :value="slotProps.data.code" />
        </template>
      </Column>
      <Column field="code" sortable header="Category">
        <template #body="slotProps">
          <Tag severity="info" :value="slotProps.data.code" /> </template
      ></Column>
      <Column field="code" sortable header="Brand">
        <template #body="slotProps">
          <Tag severity="secondary" :value="slotProps.data.code" /> </template
      ></Column>
      <Column field="code" sortable header="Model/Type">
        <template #body="slotProps">
          <Tag severity="secondary" :value="slotProps.data.code" />
        </template>
      </Column>
      <Column field="code" sortable header="Alias Name">
        <template #body="slotProps">
          <!-- <div class="flex item-center gap-[9px]">
            <p class="text-xs font-medium">{{ slotProps.data.code }}</p>
            <img src="@/assets/img/icons/detail_menu.svg" alt="" />
          </div> -->
          <AssetsModuleAction :textValue="slotProps.data.code" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>
