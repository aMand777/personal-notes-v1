import React from 'react'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import useLocale from '../../../hooks/useLocale'

type ModalCreateNotesProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onInputTitle: (event: React.ChangeEvent<HTMLDivElement>) => void
  onInputBody: (event: React.ChangeEvent<HTMLDivElement>) => void
  title: string
  body: string
  loading: boolean
}

const ModalCreateNotes: React.FC<ModalCreateNotesProps> = ({
  onSubmit,
  onInputTitle,
  onInputBody,
  title,
  body,
  loading,
}) => {
  const { isLocale } = useLocale()
  const navigate = useNavigate()

  function handleClick() {
    navigate('/notes')
  }

  return (
    <>
      <dialog id='modal-input' className='modal'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <form method='dialog'>
            <button
              onClick={handleClick}
              id='btn-close'
              data-tip={isLocale === 'id' ? 'Tutup' : 'Close'}
              className='btn btn-md btn-circle btn-ghost absolute right-2 top-2 tooltip tooltip-left flex justify-center items-center'>
              <IoClose size={35} />
            </button>
          </form>
          <form onSubmit={onSubmit}>
            <div
              id='title'
              className='input mt-7 cursor-text input-ghost w-full h-fit mb-2 text-3xl md:text-7xl scroll-none'
              data-placeholder={isLocale === 'id' ? 'Catatan rahasia' : 'Secret note'}
              contentEditable
              onInput={onInputTitle}
            />
            <div
              id='body'
              className='input cursor-text input-ghost w-full h-80 text-xl md:text-3xl overflow-auto px-3'
              data-placeholder={
                isLocale === 'id' ? 'Sebenarnya saya adalah ....' : 'Actually I am ...'
              }
              contentEditable
              onInput={onInputBody}
            />
            <div className='mt-5 flex justify-end'>
              {title?.length > 0 && body?.length > 0 ? (
                <button disabled={loading} type='submit' className='btn btn-info min-w-28'>
                  {loading && <span className='loading loading-spinner'></span>}
                  {loading ? 'loading...' : isLocale === 'id' ? 'Simpan' : 'Save'}
                </button>
              ) : (
                <div className='btn btn-info opacity-50 cursor-not-allowed min-w-28'>
                  {isLocale === 'id' ? 'Simpan' : 'Save'}
                </div>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ModalCreateNotes
