import React from 'react'
import { TbError404 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { LocaleContext } from '../../context/LocaleContext'

const NotFound = () => {
  const { isLocale } = React.useContext(LocaleContext)

  return (
    <div className='w-screen h-screen absolute top-0 z-50 bg-base-300'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <TbError404 size={30} className='text-base-content' />
          <div className='divider divider-horizontal divider-base-content'></div>
          <p className='text-base-content'>
            {isLocale === 'id'
              ? 'Halaman ini tidak dapat ditemukan.'
              : 'This page could not be found.'}
          </p>
        </div>
        <Link to='/' className='link link-accent'>
          {isLocale === 'id' ? 'Kembali ke beranda' : 'Back to home'}
        </Link>
      </div>
    </div>
  )
}

export default NotFound
