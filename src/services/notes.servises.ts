/* eslint-disable @typescript-eslint/no-explicit-any */
import { instanceApi } from '../lib/axios'

export const GET_ACTIVE_NOTES = async () => {
  try {
    const { data } = await instanceApi.get('/notes')
    return data
  } catch (error: any) {
    throw error.response?.data.message
  }
}

export const GET_ARCHIVED_NOTES = async () => {
  try {
    const { data } = await instanceApi.get('/notes/archived')
    return data
  } catch (error: any) {
    throw error.response?.data.message
  }
}

type Note = {
  title: string
  body: string
}

export const CREATE_NOTES = async (note: Note) => {
  try {
    const { data } = await instanceApi.post('/notes', note)
    return data
  } catch (error: any) {
    throw error.response?.data.message
  }
}

export const GET_NOTES_BY_ID = async (id: string | undefined) => {
  try {
    const { data } = await instanceApi.get(`/notes/${id}`)
    return data
  } catch (error: any) {
    throw error.response?.data.message
  }
}

export const ARCHIVE_NOTE = async (id: string) => {
  try {
    const { data } = await instanceApi.post(`/notes/${id}/archive`)
    return data
  } catch (error: any) {
    throw error.response?.data.message
  }
}

export const UNARCHIVE_NOTE = async (id: string) => {
  try {
    const { data } = await instanceApi.post(`/notes/${id}/unarchive`)
    return data
  } catch (error: any) {
    throw error.response?.data.message
  }
}

export const DELETE_NOTE = async (id: string) => {
  try {
    const { data } = await instanceApi.delete(`/notes/${id}`)
    return data
  } catch (error: any) {
    throw error.response?.data.message
  }
}