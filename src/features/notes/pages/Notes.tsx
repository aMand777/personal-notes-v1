import CardNotes from '../components/CardNotes'
import InfoNotes from '../components/InfoNotes'
import NotesSkeleton from '../components/NotesSkeleton'
import useLocale from '../../../hooks/useLocale'
import { GET_ACTIVE_NOTES } from '../../../services/notes.servises'
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

  const { isLoading, data: activeNotes } = useQuery({
    queryKey: ['GET_NOTES'],
    queryFn: async () => await GET_ACTIVE_NOTES(),
  })

  return (
    <>
      <div className='flex items-center justify-center mt-5'>
        <span className='text-xl font-semibold text-accent'>
          {isLocale === 'id' ? 'Catatan Aktif' : 'Active Note'}
        </span>
      </div>
      <div className='grid grid-cols-1 gap-5 mt-5 mb-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {activeNotes?.data?.length > 0 && !isLoading ? (
          activeNotes?.data?.map((note: Note) => (
            <CardNotes
              key={note.id}
              id={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
            />
          ))
        ) : (
          <NotesSkeleton loop={9} />
        )}
        {activeNotes?.data?.length < 1 && !isLoading && (
          <InfoNotes info={isLocale === 'id' ? 'Tidak ada catatan.' : 'No notes.'} />
        )}
      </div>
    </>
  )
}

export default Notes
