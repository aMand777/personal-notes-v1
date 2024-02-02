// import React from 'react'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import useLocale from '../../../hooks/useLocale'

const ModalCreateNotes = () => {
  const { isLocale } = useLocale()
  const navigate = useNavigate()

  function handleClick() {
    navigate('/notes')
  }

  return (
    <>
      <dialog id='modal-input' className='modal'>
        <div className='w-11/12 max-w-5xl modal-box'>
          <form method='dialog'>
            <button
              onClick={handleClick}
              id='btn-close'
              data-tip={isLocale === 'id' ? 'Tutup' : 'Close'}
              className='absolute flex items-center justify-center btn btn-md btn-circle btn-ghost right-2 top-2 tooltip tooltip-left'>
              <IoClose size={35} />
            </button>
          </form>
          <form>
            <div
              id='title'
              className='w-full mb-2 text-3xl input mt-7 cursor-text input-ghost h-fit md:text-7xl scroll-none'
              data-placeholder={isLocale === 'id' ? 'Catatan rahasia' : 'Secret note'}
              contentEditable
              // onInput={onInputTitle}
            />
            <div
              id='body'
              className='w-full px-3 overflow-auto text-xl input cursor-text input-ghost h-80 md:text-3xl'
              data-placeholder={
                isLocale === 'id' ? 'Sebenarnya saya adalah ....' : 'Actually I am ...'
              }
              contentEditable
              // onInput={onInputBody}
            />
            <div className='flex justify-end mt-5'>
              {/* {title?.length > 0 && body?.length > 0 ? (
                <button type='submit' className='btn btn-info'>
                  {isLocale === 'id' ? 'Simpan' : 'Save'}
                </button>
              ) : ( */}
                <div className='opacity-50 cursor-not-allowed btn btn-info'>
                  {isLocale === 'id' ? 'Simpan' : 'Save'}
                </div>
              {/* // )} */}
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ModalCreateNotes
