import { instanceApi } from '../lib/axios';

export const POST_LOGIN = async (email: string, password: string) => {
  try {
    const { data } = await instanceApi.post('/login', { email, password })
    return data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}