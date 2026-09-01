<template>
  <div class="app">
    <h1>Users</h1>
    <UserSearch v-model:query="searchQuery" v-model:field="searchField" />
    <Loader v-if="isLoading" />
    <ErrorState v-else-if="isError" :message="errorMessage" />
    <UserList v-else :users="filteredUsers" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import UserList from './components/UserList.vue'
import UserSearch from './components/UserSearch.vue'
import { useUsers } from './composables/useUsers.js'
import ErrorState from './components/ErrorState.vue'
import Loader from './components/Loader.vue'
import { DEFAULT_SEARCH_FIELD } from './constants.js'

const searchQuery = ref('')
const searchField = ref(DEFAULT_SEARCH_FIELD)
const { users, isError, isLoading, errorMessage } = useUsers()

const filteredUsers = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (query.length === 0) {
    return users.value
  }

  return users.value.filter((user) => {
    return user[searchField.value].toLowerCase().includes(query)
  })
})
</script>

<style scoped>
.app {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

</style>
