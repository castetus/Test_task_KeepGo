<template>
  <div class="app">
    <h1>Users</h1>
    <UserSearch v-model="searchQuery" />
    <UserList :users="users" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserList from './components/UserList.vue'
import UserSearch from './components/UserSearch.vue'
import { useUsers } from './composables/useUsers.js'

const searchQuery = ref('')
const { users } = useUsers()
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
