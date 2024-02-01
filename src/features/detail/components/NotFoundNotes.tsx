import { LuSearchX } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import useLocale from '../../../hooks/useLocale'

const NotFoundNotes = () => {
  const { isLocale } = useLocale()
  return (
    <div className='w-screen h-screen absolute bg-base-300 top-0 z-50'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <LuSearchX size={30} className='text-base-content' />
          <div className='divider divider-horizontal divider-base-content'></div>
          <p className='text-base-content'>
            {isLocale === 'id' ? 'Catatan tidak ditemukan.' : 'Note not found.'}
          </p>
        </div>
        <Link to='/' className='link link-accent'>
          {isLocale === 'id' ? 'Kembali ke beranda' : 'Back to home'}
        </Link>
      </div>
    </div>
  )
}

export default NotFoundNotes