import React from 'react'
import { ShowFormattedDate } from '../../../utils/formateDate'
import { useNavigate } from 'react-router-dom'
import { MdArchive, MdUnarchive, MdDelete } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import ConfirmDelete from './ConfirmDelete'
import { openAlert } from '../../../utils/handleModal'
import parser from 'html-react-parser'
import useLocale from '../../../hooks/useLocale'

type CardDetailNotesProps = {
  id: string
  title: string
  createdAt: string
  body: string
  isArchived: boolean
}

const CardDetailNotes: React.FC<CardDetailNotesProps> = ({ id, title, body, createdAt, isArchived }) => {
  const { isLocale } = useLocale()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const dataTipArchived = isLocale === 'id' ? 'Arsipkan' : 'Archive'
  const dataTipUnArchived = isLocale === 'id' ? 'Aktifkan' : 'Unarchive'

  return (
    <div className='container mx-auto'>
      <div className='card w-11/12 md:w-2/3 lg:w-1/2 bg-secondary shadow-xl mx-auto min-h-max my-10'>
        <button
          onClick={handleGoBack}
          data-tip={isLocale === 'id' ? 'Tutup' : 'Close'}
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg tooltip'>
          <IoMdClose size={30} className='text-secondary-content' />
        </button>
        <div className='card-body'>
          <h2 className='card-title text-secondary-content'>{parser(title)}</h2>
          <p className='text-secondary-content'>{ShowFormattedDate(createdAt)}</p>
          <p className='text-secondary-content'>{parser(body)}</p>
          <div className='card-actions justify-end mt-2 gap-5'>
            <div className='tooltip' data-tip={isLocale === 'id' ? 'Hapus' : 'Delete'}>
              <button
                onClick={() => openAlert('modal-confirm')}
                className='btn btn-ghost hover:text-red-500'>
                <MdDelete size={30} className='text-secondary-content' />
              </button>
            </div>
            <div className='tooltip' data-tip={isArchived ? dataTipUnArchived : dataTipArchived}>
              <button
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