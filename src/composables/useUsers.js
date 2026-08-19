import { onMounted, ref } from 'vue'
import { fetchUsers } from '../api/mock.js'

export function useUsers() {
  const users = ref([])

  onMounted(() => {
    fetchUsers().then((data) => {
      users.value = data
    })
  })

  return { users }
}
