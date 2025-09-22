<script setup>
import { computed } from 'vue'
import { validationRules } from './validation'
import { formFieldProps } from './shared-props'

const props = defineProps({
  ...formFieldProps,
  type: { type: String, default: 'text' },
  modelValue: [String, Number],
})
const isRequired = computed(() => props.required)
const validationRule = validationRules[props.type]

function onInput(e) {
  const value = e.target.value;
  console.log(validationRule[0](value))
}
</script>

<template>
  <div>
    <div class="form-element-label">
      <b>{{ props.label }}<span v-if="isRequired" class="required-asterisk">*</span></b>
    </div>
    <div class="input-group mb-3">
      <input
        class="form-control"
        :aria-label="props.label"
        :value="props.modelValue"
        :id="props.id"
        :name="props.name"
        :required="props.required"
        :type="props.type"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :pattern="validationRule"
        @input="onInput"
      />
      <div class="invalid-feedback">This field is required</div>
    </div>
  </div>
</template>
