<template>
  <div class="app">
    <h1>Users</h1>
    <UserSearch v-model="searchQuery" />
    <UserList v-if="users.length > 0" :users="filteredUsers" />
    <ErrorState v-if="isError" :message="errorMessage" />
    <Loader v-if="isLoading" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import UserList from './components/UserList.vue'
import UserSearch from './components/UserSearch.vue'
import { useUsers } from './composables/useUsers.js'
import ErrorState from './components/ErrorState.vue'
import Loader from './components/Loader.vue'

const searchQuery = ref('')
const { users, isError, isLoading, errorMessage } = useUsers()

const searchField = 'name';

const filteredUsers = computed(() => {
  return users.value.filter((user) => user[searchField].toLowerCase().includes(searchQuery.value.toLowerCase()))
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
