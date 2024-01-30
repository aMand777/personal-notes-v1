import { instanceApi } from '../lib/axios'

export const POST_REGISTER_USER = async (name: string, email: string, password: string) => {
  try {
    const { data } = await instanceApi.post('/login', { name, email, password })
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data.message
  }
}
