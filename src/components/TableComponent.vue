<script setup>
import PaginationComponent from './PaginationComponent.vue';

const tableData = [
  { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
  { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
  { id: 3, firstName: 'John', lastName: 'Doe', handle: '@social' },
  { id: 4, firstName: 'Vince', lastName: 'Hannah', handle: '@lapd' },
]
</script>
<template>
  <div class="page-wrapper">
    <div class="table-wrapper">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.handle }}</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-12 pagination-row"><PaginationComponent :totalPages="6" :currentPageOnLoad="4" /></div>
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
