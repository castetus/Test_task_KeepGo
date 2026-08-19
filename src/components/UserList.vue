<template>
  <div class="users-list">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script setup>
import UserCard from './UserCard.vue'

defineProps({
  users: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.users-list {
  display: grid;
  gap: 12px;
}
</style>
