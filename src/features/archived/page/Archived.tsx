import React from 'react'
import CardNotes from '../../notes/components/CardNotes'
import InfoNotes from '../../notes/components/InfoNotes'
import NotesSkeleton from '../../notes/components/NotesSkeleton'
import useLocale from '../../../hooks/useLocale'
import { GET_ARCHIVED_NOTES } from '../../../services/notes.servises'
import { useQuery } from '@tanstack/react-query'
import useSearch from '../../../hooks/useSearch'
import { useSearchParams } from 'react-router-dom'

type Note = {
  key: string
  id: string
  title: string
  createdAt: string
  body: string
}

const Archived = () => {
  const { isLocale } = useLocale()
  const { querySearch } = useSearch()
  const [searchParams] = useSearchParams()
  const queryParams = searchParams.get('title' || '')
  const [notes, setNotes] = React.useState<[]>([])

  const { isLoading } = useQuery({
    queryKey: ['GET_ARCHIVED_NOTES'],
    queryFn: async () => {
      const result = await GET_ARCHIVED_NOTES()
      if (result.status === 'success') {
        setNotes(result.data)
      }
      return result
    }
  })

  
  const archivedNotes = notes.filter((note: Note) =>
    note.title.toLowerCase().includes(queryParams || querySearch || ''),
  )

  return (
    <>
      <div className='flex items-center justify-center mt-5'>
        <span className='text-xl font-semibold text-accent'>
          {isLocale === 'id' ? 'Catatan Arsip' : 'Archived Note'}
        </span>
      </div>
      <div className='grid grid-cols-1 gap-5 mt-5 mb-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {archivedNotes?.length > 0 && !isLoading
          ? archivedNotes?.map((note: Note) => (
              <CardNotes
                key={note.id}
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
                body={note.body}
              />
            ))
          : isLoading && <NotesSkeleton loop={9} />}
        {archivedNotes?.length < 1 && !isLoading && (
          <InfoNotes info={isLocale === 'id' ? 'Tidak ada catatan.' : 'Empty notes.'} />
        )}
      </div>
    </>
  )
}

export default Archived
