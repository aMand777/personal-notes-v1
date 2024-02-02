import React from 'react'
import { ShowFormattedDate } from '../../../utils/formateDate'
import { useNavigate } from 'react-router-dom'
import { MdArchive, MdUnarchive, MdDelete } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import ConfirmDelete from './ConfirmDelete'
import { openAlert } from '../../../utils/handleModal'
import parser from 'html-react-parser'
import useLocale from '../../../hooks/useLocale'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ARCHIVE_NOTE, UNARCHIVE_NOTE } from '../../../services/notes.servises'

type CardDetailNotesProps = {
  id: string
  title: string
  createdAt: string
  body: string
  isArchived: boolean
}

const CardDetailNotes: React.FC<CardDetailNotesProps> = ({ id, title, body, createdAt, isArchived }) => {
  const queryClient = useQueryClient()
  const { isLocale } = useLocale()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const dataTipArchived = isLocale === 'id' ? 'Arsipkan' : 'Archive'
  const dataTipUnArchived = isLocale === 'id' ? 'Aktifkan' : 'Unarchive'

  const { mutateAsync: toggleArchiveNote } = useMutation({
    mutationFn: async () => {
      if (isArchived === false) {
        await ARCHIVE_NOTE(id)
        
      } else {
        await UNARCHIVE_NOTE(id)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ACTIVE_NOTES', 'GET_ARCHIVED_NOTES'] }),
      handleGoBack()
    }
  })
  
  const handleArchivedNote = async () => {
    await toggleArchiveNote()
  }

  return (
    <div className='container mx-auto'>
      <div className='w-11/12 mx-auto my-10 shadow-xl card md:w-2/3 lg:w-1/2 bg-secondary min-h-max'>
        <button
          onClick={handleGoBack}
          data-tip={isLocale === 'id' ? 'Tutup' : 'Close'}
          className='absolute text-lg btn btn-sm btn-circle btn-ghost right-2 top-2 tooltip'>
          <IoMdClose size={30} className='text-secondary-content' />
        </button>
        <div className='card-body'>
          <h2 className='card-title text-secondary-content'>{parser(title)}</h2>
          <p className='text-secondary-content'>{ShowFormattedDate(createdAt)}</p>
          <p className='text-secondary-content'>{parser(body)}</p>
          <div className='justify-end gap-5 mt-2 card-actions'>
            <div className='tooltip' data-tip={isLocale === 'id' ? 'Hapus' : 'Delete'}>
              <button
                onClick={() => openAlert('modal-confirm')}
                className='btn btn-ghost hover:text-red-500'>
                <MdDelete size={30} className='text-secondary-content' />
              </button>
            </div>
            <div className='tooltip' data-tip={isArchived ? dataTipUnArchived : dataTipArchived}>
              <button
                onClick={handleArchivedNote}
                className='btn btn-ghost hover:text-secondary-content'>
                {isArchived ? (
                  <MdUnarchive size={30} className='text-secondary-content' />
                ) : (
                  <MdArchive size={30} className='text-secondary-content' />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDelete id={id} />
    </div>
  )
}

export default CardDetailNotes