import React from 'react'
import ModalCreateNotes from '../components/ModalCreateNotes'
import { openAlert } from '../../../utils/handleModal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CREATE_NOTES } from '../../../services/notes.servises'
import { useNavigate } from 'react-router-dom'

const initialNotes = {
  title: '',
  body: '',
}

const Create = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [inputNotes, setInputNotes] = React.useState(initialNotes)

  const handleInputTitle = (event: React.ChangeEvent<HTMLDivElement>) => {
    const title = event.target.innerHTML
    setInputNotes({ ...inputNotes, title })
  }

  const handleInputBody = (event: React.ChangeEvent<HTMLDivElement>) => {
    const body = event.target.innerHTML
    setInputNotes({ ...inputNotes, body })
  }

  React.useEffect(() => {
    openAlert('modal-input')
  }, [])

  const { mutateAsync: createNote } = useMutation({
    mutationFn: CREATE_NOTES,
    onSuccess: () => {
      setLoading(false)
      navigate('/notes')
      queryClient.invalidateQueries({
        queryKey: ['GET_ACTIVE_NOTES'],
      })
    },
    onError: () => {
      setLoading(false)
    },
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    await createNote(inputNotes)
  }

  return (
    <>
      <ModalCreateNotes
        onSubmit={handleSubmit}
        onInputTitle={handleInputTitle}
        onInputBody={handleInputBody}
        title={inputNotes.title}
        body={inputNotes.body}
        loading={loading}
      />
    </>
  )
}

export default Create
