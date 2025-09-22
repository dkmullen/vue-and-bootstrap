<script setup>
import { computed } from 'vue'
// import { validationRules } from './validation'
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
  </div>
</template>
