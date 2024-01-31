import useLocale from '../../hooks/useLocale'
import { CiCircleCheck } from 'react-icons/ci'

const AlertConfirm = () => {
  const { isLocale } = useLocale()
  return (
    <>
      <dialog id='alert-confirm' className='modal'>
        <div className='modal-box relative overflow-hidden w-60'>
          <div
            role='alert'
            className='alert alert-success flex flex-row gap-3 absolute -top-1 left-0 items-center justify-center'>
            <CiCircleCheck className='h-6 w-6' />
            <span>{isLocale === 'id' ? 'Berhasil, silakan masuk' : 'Success, please sign in'}</span>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default AlertConfirm
