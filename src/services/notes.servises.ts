import { instanceApi } from '../lib/axios'

export const GET_ACTIVE_NOTES = async () => {
  try {
    const { data } = await instanceApi.get('/notes')
    return data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data.message
  }
}

export const GET_ARCHIVED_NOTES = async () => {
  try {
    const { data } = await instanceApi.get('/notes/archived')
    return data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data.message
  }
}

export const GET_NOTES_BY_ID = async (id: string | undefined) => {
  try {
    const { data } = await instanceApi.get(`/notes/${id}`)
    return data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data.message
  }
}