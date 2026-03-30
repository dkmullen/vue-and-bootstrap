<script setup>
import { ref, computed, onMounted } from 'vue'
import PaginationComponent from './PaginationComponent.vue'

const props = defineProps({
  itemsPerPage: { type: Number, default: 5 },
  tableData: { type: Array, default: () => [] },
  headers: { type: Array, default: () => [] },
})
const currentPage = ref(1)
const currentContents = ref([])

const totalPages = computed(() => Math.ceil(props.tableData.length / props.itemsPerPage))

function getPageData(page) {
  const targetPage = Number(page)
  if (Number.isNaN(targetPage)) return

  const clamped = Math.max(1, Math.min(targetPage, totalPages.value))
  currentPage.value = clamped

  const start = (clamped - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  currentContents.value = props.tableData.slice(start, end)
}

function handlePageChange(page) {
  getPageData(page)
}

onMounted(() => {
  getPageData(currentPage.value)
})
</script>
<template>
  <div class="page-wrapper">
    <div class="table-wrapper">
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in currentContents" :key="item.id">
            <td v-for="header in headers" :key="header.value">{{ item[header.value] }}</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-12 pagination-row">
          <PaginationComponent
            :totalPages="totalPages"
            :currentPageOnLoad="currentPage"
            @update:currentPage="handlePageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-wrapper {
  border: 1px solid rgba(0, 0, 0, 0.325);
}
.pagination-row {
  display: flex;
  justify-content: center;
}
</style>
