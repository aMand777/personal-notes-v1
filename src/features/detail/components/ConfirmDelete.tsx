import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import useLocale from '../../../hooks/useLocale'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DELETE_NOTE } from '../../../services/notes.servises'

type ConfirmDeleteProps = {
  id: string
}
const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ id }) => {
  const queryClient = useQueryClient()
  const [loading, setLoading] = React.useState<boolean>(false)
  const { isLocale } = useLocale()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const { mutateAsync: deleteNote } = useMutation({
    mutationFn: async () => await DELETE_NOTE(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ACTIVE_NOTES'] })
      queryClient.invalidateQueries({ queryKey: ['GET_ARCHIVED_NOTES'] })
      setLoading(false)
      handleGoBack()
    },
  })

  const handleDeleteNote = async () => {
    setLoading(true)
    await deleteNote()
  }

  return (
    <>
      <dialog id='modal-confirm' className='modal'>
        <div className='modal-box'>
          <div className='flex items-center gap-1'>
            <h3 className='text-lg font-bold'>
              {isLocale === 'id' ? 'Hapus Catatan' : 'Delete Notes'}
            </h3>
            <IoMdInformationCircleOutline color='red' size={20} />
          </div>
          <p className='py-4'>
            {isLocale === 'id'
              ? 'Apakah Anda yakin ingin menghapus catatan ini?'
              : 'Are you sure you want to delete this note?'}
          </p>
          <div className='flex justify-end gap-3'>
            <button
              disabled={loading}
              onClick={handleDeleteNote}
              className='btn btn-outline btn-error'>
              {loading && <span className='loading loading-spinner'></span>}
              {loading ? 'loading...' : isLocale === 'id' ? 'Hapus' : 'Delete'}
            </button>
            <form method='dialog'>
              <button className='btn'>{isLocale === 'id' ? 'Tutup' : 'Close'}</button>
            </form>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default ConfirmDelete
