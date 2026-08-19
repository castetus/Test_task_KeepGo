import { onBeforeMount, ref } from 'vue'
import { fetchUsers } from '../api/mock.js'

export function useUsers() {
  const users = ref([])
  const isLoading = ref(false)
  const isError = ref(false)
  const errorMessage = ref('')

  const loadUsers = async () => {
    isLoading.value = true
    isError.value = false
    errorMessage.value = ''

    try {
      users.value = await fetchUsers()
    } catch (error) {
      isError.value = true
      errorMessage.value = error instanceof Error
        ? error.message
        : 'Failed to load users'
    } finally {
      isLoading.value = false
    }
  }

  onBeforeMount(loadUsers)

  return { users, isLoading, isError, errorMessage }
}
