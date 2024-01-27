import { instanceApi } from '../lib/axios'

export const GET_USER_LOGGED_IN = async () => {
  try {
    const { data } = await instanceApi.get('/user/me')
    return data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response?.data.message)
  }
}