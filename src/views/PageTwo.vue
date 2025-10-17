<script setup>
import { reactive, onMounted } from 'vue'
import { uploadFile } from '@/services/apiService'

const payload = reactive([])

function submit() {
  payload.forEach((i) => {
    if (i.file && i.docketDate) {
      const formatted = i.docketDate.replace(/-/g, '');
      const fileName = `DailyDkt${formatted}.pdf`
      const renamedFile = new File([i.file], fileName, { type: i.file.type } )
      sendOneForm(renamedFile)
    }
  })
}
async function sendOneForm(file) {
  try {
    await uploadFile(file)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('done')
  }
}
function addRow() {
  if (payload.length < 5) {
    payload.push({ file: null, date: null })
  }
}
function deleteRow(idx) {
  payload.splice(idx, 1)
}
function setForm() {
  payload.length = 0
  for (let i = 0; i < 3; i++ ) {
    payload.push({ file: null, docketDate: null })
  }
}
function selectFile(e, idx) {
  payload[idx].file = e.target.files[0]
}

onMounted(() => {
  setForm()
})
</script>

<template>
  <div class="container">
    <h1>Page Two</h1>
      <form class="needs-validation" novalidate>
        <div class="row" v-for="(item, index) in payload" :key="item.date">
          <div class="col-12 col-md-4">
            <div class="mb-3">
              <label for="file" class="form-label">File</label>
              <input type="file" class="form-control" id="file" v-on:change="selectFile($event, index)" accept=".pdf">
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="mb-3">
              <label for="date" class="form-label">Docket Date</label>
              <input type="date" class="form-control" id="date" v-model="payload[index].docketDate">
            </div>
          </div>
          <div class="col-12 col-md-4 align-self-end pb-3">
            <button type="button" @click="deleteRow(index)" class="btn btn-danger btn-sm me-1" v-if="index > 2">Delete</button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="button" @click="submit" class="btn btn-primary me-1">Submit</button>
            <button type="button" @click="setForm" class="btn btn-secondary me-1">Clear</button>
            <button type="button" @click="addRow" class="btn btn-success me-1" :disabled="payload.length > 4">Add Row</button>
          </div>
        </div>
      </form>
  </div>
</template>
