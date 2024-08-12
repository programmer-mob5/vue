<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import AssetsModuleAction from './AssetsModuleAction.vue';
import AssetsModel from '@/dto/assets/model/AssetsModel';
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';

const props = defineProps<{
  assets: AssetsModel[] | undefined;
  totalRecords: number | undefined;
}>();
</script>

<template>
  <div class="card p-6 mt-2 bg-generalSidebar rounded-lg">
    <div class="flex items-center justify-end gap-2 mt-6">
      <div class="flex items-center gap-1">
        <Button severity="secondary" outlined aria-label="Bookmark">
          <img
            alt="Search Toolbar"
            src="@/assets/img/icons/toolbar/toolbar_search.svg"
          />
        </Button>
        <Button severity="secondary" outlined aria-label="Bookmark">
          <img
            alt="Search Toolbar"
            src="@/assets/img/icons/toolbar/toolbar_filter.svg"
          />
        </Button>
      </div>

      <Button label="Register" severity="info">
        <template #icon>
          <img
            alt="Search Toolbar"
            src="@/assets/img/icons/toolbar/toolbar_add.svg"
          />
        </template>
      </Button>
    </div>

    <DataTable class="mt-2" :value="assets">
      <Column field="assetsName" sortable header="Assets"></Column>
      <Column field="groupName" sortable header="Group">
        <template #body="slotProps">
          <Tag severity="info" :value="slotProps.data.groupName" />
        </template>
      </Column>
      <Column field="category" sortable header="Category">
        <template #body="slotProps">
          <Tag severity="info" :value="slotProps.data.category" /> </template
      ></Column>
      <Column field="brand" sortable header="Brand">
        <template #body="slotProps">
          <Tag severity="secondary" :value="slotProps.data.brand" /> </template
      ></Column>
      <Column field="moderOrType" sortable header="Model/Type">
        <template #body="slotProps">
          <Tag severity="secondary" :value="slotProps.data.moderOrType" />
        </template>
      </Column>
      <Column field="aliasName" sortable header="Alias Name">
        <template #body="slotProps">
          <AssetsModuleAction :textValue="slotProps.data.aliasName" />
        </template>
      </Column>
    </DataTable>
    <div class="mt-3">
      <Paginator 
      class="flex justify-start "
      :total-records="totalRecords" :rows="10"
      :rows-per-page-options="[10,25,50,100]"
       />
    </div>
  </div>
</template>
