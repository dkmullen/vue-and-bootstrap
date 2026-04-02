<script setup>
import { reactive, onMounted } from 'vue'
import BaseButton from './base-components/BaseButton.vue'
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
  email: '',
  phone: '',
  dob: '',
  ssn: '',
})

function validate() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      },
      false,
    )
  })
}

function submitForm() {
  console.log('Form submitted with data:', formData)
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
              :required="false"
            />
          </div>
          <div class="col-12 col-md-4">
            <BaseInput
              label="Nickname"
              id="nickname"
              name="nickname"
              v-model="formData.nickName"
              :required="false"
              autocomplete="given-name"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <BaseInput
              label="Email"
              v-model="formData.email"
              type="email"
              placeholder="you@example.com"
              :required="false"
            />
          </div>
          <div class="col-12 col-md-4">
            <BaseInput label="Phone" v-model="formData.phone" type="tel" :required="false" />
          </div>
          <div class="col-12 col-md-4">
            <BaseInput label="DOB" v-model="formData.dob" type="datefield" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <BaseInput label="SSN" v-model="formData.ssn" type="ssn" />
          </div>
          <div class="col-12 col-md-6">
            <BaseTextArea label="Comments" />
          </div>
        </div>
        <div class="col-12">
          <BaseButton
            label="Submit Form"
            @click="submitForm"
            icon="floppy2"
            type="submit"
            color="success"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
