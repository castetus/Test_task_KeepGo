<template>
  <div class="user-search">
    <select
      v-model="searchField"
      class="user-search-select"
      aria-label="Search field"
    >
      <option
        v-for="option in USER_SEARCH_FIELDS"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <input
      v-model="searchQuery"
      class="user-search-field"
      type="search"
      placeholder="Search users..."
      aria-label="Search users"
    />
  </div>
</template>

<script setup>
import { USER_SEARCH_FIELDS } from '../constants.js'

const searchQuery = defineModel('query', {
  type: String,
  default: '',
})

const searchField = defineModel('field', {
  type: String,
  default: 'name',
  validator: (value) => USER_SEARCH_FIELDS.some((option) => option.value === value),
})
</script>

<style scoped>
.user-search {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.user-search-field,
.user-search-select {
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  font: inherit;
}

.user-search-field {
  flex: 1;
  min-width: 0;
  width: 100%;
}
</style>
