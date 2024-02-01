import React from 'react'
import CardDetailNotes from '../components/CardDetailNotes'
import { useParams } from 'react-router-dom'
import DetailNotesSkeleton from '../components/DetailNotesSkeleton'
import NotFoundNotes from '../components/NotFoundNotes'
import { GET_NOTES_BY_ID } from '../../../services/notes.servises'
import { useQuery } from '@tanstack/react-query'

const Detail = () => {
  const { id } = useParams()

  const initialNotes = {
    id: '',
    title: '',
    createdAt: '',
    body: '',
    archived: false,
  }
  const [detailNote, setDetailNote] = React.useState(initialNotes)

  const { isLoading, data } = useQuery({
    queryKey: ['GET_NOTES_BY_ID', id],
    queryFn: async () => {
      const result = await GET_NOTES_BY_ID(id)
      setDetailNote(result.data)
      return result
    }
  })
  
  return (
    <>
      <div>
        {detailNote.title.length > 0 && !isLoading ? (
          <CardDetailNotes
            id={detailNote.id}
            title={detailNote.title}
            createdAt={detailNote.createdAt}
            body={detailNote.body}
            isArchived={detailNote.archived}
          />
        ) : (<DetailNotesSkeleton />
        )}
        {!data && !isLoading && <NotFoundNotes />}
      </div>
    </>
  )
}

export default Detail
