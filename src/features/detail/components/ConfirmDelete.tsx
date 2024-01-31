import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import useLocale from '../../../hooks/useLocale'

type ConfirmDeleteProps = {
  id: string
}
const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ id }) => {
  console.log(id)
  const { isLocale } = useLocale()
  // const navigate = useNavigate()

  // const handleGoBack = () => {
  //   navigate(-1)
  // }

  const handleDeleteNote = () => {
    null
  }

  return (
    <>
      <dialog id='modal-confirm' className='modal'>
        <div className='modal-box'>
          <div className='flex gap-1 items-center'>
            <h3 className='font-bold text-lg'>
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
            <button onClick={handleDeleteNote} className='btn btn-outline btn-error'>
              {isLocale === 'id' ? 'Hapus' : 'Delete'}
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
