<script setup>
import FormComponent from '@/components/FormComponent.vue'
import TableComponent from '@/components/TableComponent.vue'

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'First Name', value: 'firstName' },
  { text: 'Last Name', value: 'lastName' },
  { text: 'Handle', value: 'handle' },
]

const tableData = [
  { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
  { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
  { id: 3, firstName: 'John', lastName: 'Doe', handle: '@social' },
  { id: 4, firstName: 'Vince', lastName: 'Hannah', handle: '@lapd' },
  { id: 5, firstName: 'Jane', lastName: 'Smith', handle: '@jsmith' },
  { id: 6, firstName: 'Emily', lastName: 'Johnson', handle: '@ejohnson' },
  { id: 7, firstName: 'Michael', lastName: 'Brown', handle: '@mbrown' },
  { id: 8, firstName: 'Sarah', lastName: 'Davis', handle: '@sdavis' },
]
</script>

<template>
  <FormComponent />
  <TableComponent :itemsPerPage="3" :tableData="tableData" :headers="headers" />
</template>

<style scoped></style>
