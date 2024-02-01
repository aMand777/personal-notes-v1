// import React from 'react'
// import CardDetailNotes from '../components/CardDetailNotes'
import { useParams } from 'react-router-dom'
// import DetailNotesSkeleton from '../components/DetailNotesSkeleton'
// import NotFoundNotes from '../components/notes/NotFoundNotes'
// import DetailNotesSkeleton from '../components/loading/DetailNotesSkeleton'

const Detail = () => {
  const { id } = useParams()
  console.log(id)
  // const initialNotes = {
  //   id: '',
  //   title: '',
  //   createdAt: '',
  //   body: '',
  //   archived: false,
  // }
  // const [detailNote, setDetailNote] = React.useState(initialNotes)
  // const [loading, setLoading] = React.useState(false)

  return (
    <>
      <div>
        {/* {detailNote.title.length > 0 && !loading ? (
          <CardDetailNotes
            id={detailNote.id}
            title={detailNote.title}
            createdAt={detailNote.createdAt}
            body={detailNote.body}
            isArchived={detailNote.archived}
          />
        ) : (
          loading && <DetailNotesSkeleton />
        )}
        {detailNote.title.length < 1 && !loading && <NotFoundNotes />} */}
      </div>
    </>
  )
}

export default Detail
