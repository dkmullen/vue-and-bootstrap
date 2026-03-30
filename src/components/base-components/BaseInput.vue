<script setup>
import { computed } from 'vue'
import { validationRules } from './validation'
import { formFieldProps } from './shared-props'
import { vMaska } from 'maska/vue'

const props = defineProps({
  ...formFieldProps,
  type: { type: String, default: 'text' },
  modelValue: [String, Number],
})
const isRequired = computed(() => props.required)
const validationRule = validationRules[props.type]

const typeConfig = {
  ssn: { hint: 'xxx-xx-xxxx', mask: { mask: '###-##-####' } },
  tel: { hint: 'xxx-xxx-xxxx', mask: { mask: '###-###-####' } },
  zip: { hint: 'xxxxx', mask: { mask: '#####' } },
  datefield: { hint: 'MM-DD-YYYY', mask: { mask: '##-##-####' } },
}

const { hint, mask } = typeConfig[props.type] || {}

const emit = defineEmits(['update:modelValue'])

function onInput(event) {
  const value = event.target.value
  if (value && !validationRule?.regex?.test(value)) {
    event.target.classList.add('is-invalid')
    event.target.setCustomValidity(validationRule.warning || 'Invalid format')
  } else {
    event.target.classList.remove('is-invalid')
    event.target.setCustomValidity('')
  }
  emit('update:modelValue', value)
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
        :disabled="props.disabled"
        :readonly="props.readonly"
        :placeholder="hint ? hint : props.placeholder"
        v-maska="mask"
        :type="type"
        @input="onInput"
      />
      <div class="invalid-feedback">{{ validationRule?.warning || 'Invalid value' }}</div>
    </div>
  </div>
</template>
