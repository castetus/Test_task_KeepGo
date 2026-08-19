<template>
  <input
    :value="modelValue"
    type="search"
    placeholder="Search users..."
    aria-label="Search users"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font: inherit;
}
</style>
