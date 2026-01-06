<script setup>
import { computed } from 'vue'
import { validationRules } from './validation'
import { formFieldProps } from './shared-props'

const props = defineProps({
  ...formFieldProps,
  modelValue: [String, Number],
})
const isRequired = computed(() => props.required)
const validationRule = validationRules[props.type]
const emit = defineEmits(['update:modelValue'])

function onInput(event) {
  const value = event.target.value
  if (validationRule) {
    if (value && !validationRule.regex.test(value)) {
      event.target.classList.add('is-invalid')
      event.target.setCustomValidity(validationRule.warning || 'Invalid format')
    } else {
      event.target.classList.remove('is-invalid')
      event.target.setCustomValidity('')
    }
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <div>
    <div class="form-element-label">
      <b>{{ props.label }}<span v-if="isRequired" class="required-asterisk">*</span></b>
    </div>
    <textarea
      class="form-control"
      :aria-label="props.label"
      :value="props.modelValue"
      :id="props.id"
      :name="props.name"
      :required="props.required"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :placeholder="hint ? hint : props.placeholder"
      v-maska="mask"
      :type="type"
      @input="onInput"
      style="height: 100px">
    </textarea>
    <div class="invalid-feedback"><span>{{ validationRule?.warning || 'This field is required.' }}</span></div>
  </div>
</template>
