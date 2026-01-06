<script setup>
import { computed } from 'vue'
import { formFieldProps } from './shared-props'

const props = defineProps({
  ...formFieldProps,
  modelValue: [String, Number], // <-- support for v-model
  items: Array,
})
const isRequired = computed(() => props.required)
const emit = defineEmits(['update:modelValue'])

function onChange(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div>
    <div class="form-element-label">
      <b>{{ props.label }}<span v-if="isRequired" class="required-asterisk">*</span></b>
    </div>
    <select
      class="form-select"
      :aria-label="props.label"
      :value="props.modelValue"
      :id="props.id"
      :name="props.name"
      :required="props.required"
      @change="onChange"
      >
      <option v-for="item in props.items" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <div class="invalid-feedback">This field is required.</div>
  </div>
</template>

<!-- The Bootstrap **invalid-feedback** class is used to display an error message when a form input element
 fails validation. The message is hidden by default and becomes visible when the associated input is in an
 invalid state.  -->
