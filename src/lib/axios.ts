import axios from 'axios'

const instanceApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
})

instanceApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

export { instanceApi }