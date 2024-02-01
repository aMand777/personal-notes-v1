import React from 'react'
import CardNotes from '../components/CardNotes'
import InfoNotes from '../components/InfoNotes'
import NotesSkeleton from '../components/NotesSkeleton'
import useLocale from '../../../hooks/useLocale'
import { GET_NOTES } from '../../../services/notes.servises'
import { useQuery } from '@tanstack/react-query'

type Note = {
  key: string
  id: string
  title: string
  createdAt: string
  body: string
}

const Notes = () => {
  const { isLocale } = useLocale()
  const [activeNotes, setActiveNotes] = React.useState<[]>([])
  
    const { isLoading, data } = useQuery({
      queryKey: ['GET_NOTES'],
      queryFn: async () => {
        const result = await GET_NOTES()
        if (result.status === 'success') {
          setActiveNotes(result.data)
        }
        return result
      },
    })

  return (
    <>
      <div className='flex items-center justify-center mt-5'>
        <span className='text-accent text-xl font-semibold'>
          {isLocale === 'id' ? 'Catatan Aktif' : 'Active Note'}
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 mb-16'>
        {activeNotes.length > 0 && !isLoading
          ? activeNotes.map((note: Note) => (
              <CardNotes
                key={note.id}
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
                body={note.body}
              />
            ))
          : (<NotesSkeleton loop={9} />)}
        {!data && !isLoading && (
          <InfoNotes info={isLocale === 'id' ? 'Tidak ada catatan.' : 'No notes.'} />
        )}
      </div>
    </>
  )
}

export default Notes
