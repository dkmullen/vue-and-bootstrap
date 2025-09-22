<script setup>
import { reactive, onMounted } from 'vue'
const colors = [
  { label: 'Select a color', value: null },
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
]
const teams = [
  { label: 'Packers', value: 'packers' },
  { label: 'Titans', value: 'titans' },
  { label: 'Bills', value: 'bills' },
]

const formData = reactive({
  favColor: '',
  favTeam: '',
  nickName: '',
  email: ''
})

function validate() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
}
onMounted(() => {
  validate()
})
</script>

<template>
  <div class="page-wrapper">
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    <div>
      <form class="needs-validation" novalidate>
          <div class="row">
            <div class="col-12 col-md-4">
              <BaseSelect label="Favorite Team" :items="teams" v-model="formData.favTeam" />
            </div>
            <div class="col-12 col-md-4">
              <BaseSelect
                label="Favorite Color"
                :items="colors"
                v-model="formData.favColor"
              />
            </div>
            <div class="col-12 col-md-4">
              <BaseInput label="Nickname" v-model="formData.nickName" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4">
              <BaseInput label="Email" v-model="formData.email" type="email" :required="false" />
            </div>
          </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
