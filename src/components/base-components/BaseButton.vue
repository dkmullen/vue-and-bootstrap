<script setup>
import { Icon } from '@iconify/vue'

const { type, color, icon, label } = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'primary',
  },
  icon: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button class="btn" :class="`btn-${color}`" :type="type" @click="$emit('click')">
    <Icon :icon="`bi:${icon}`" v-if="icon" class="me-2 mb-1" />
    {{ label }}
  </button>
</template>
