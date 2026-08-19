<template>
  <div class="error-state" role="alert">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'Error'
  },
})
</script>

<style scoped>
.error-state {
  padding: 16px;
  border: 1px solid #ffcdd2;
  border-radius: 6px;
  background: #ffebee;
  color: #c62828;
  text-align: center;
}
</style>
