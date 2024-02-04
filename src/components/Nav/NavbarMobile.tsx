import React from 'react'
import { IoSearchOutline, IoLanguageOutline } from 'react-icons/io5'
import { IoMdArrowBack } from 'react-icons/io'
import { MdOutlineLogout } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { setDataLocale } from '../../utils/storage'
import SelectTheme from '../theme/SelectTheme'
import { removeStorage } from '../../utils/storage'
import useUser from '../../hooks/useUser'
import useLocale from '../../hooks/useLocale'
import { useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import useSearch from '../../hooks/useSearch'

const NavbarMobile = () => {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()
  const { querySearch, setQuerySearch } = useSearch()
  const { userLogin } = useUser()
  const { isLocale, setIsLocale } = useLocale()
  const [openSearchBar, setOpenSearchBar] = React.useState<boolean>(false)
  const queryParams = searchParams.get('title' || '')

  const handleLogout = () => {
    removeStorage('accessToken')
    queryClient.invalidateQueries({ queryKey: ['GET_USER_LOGGED_IN'] })
  }

  const handleClickEn = () => {
    setIsLocale('en')
    setDataLocale(isLocale)
  }
  const handleClickId = () => {
    setIsLocale('id')
    setDataLocale(isLocale)
  }

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event?.target !== undefined ? event?.target.value : ''
    setQuerySearch(keyword.toLowerCase())
    setSearchParams({ title: keyword.toLowerCase() })
  }

  return (
    <>
      <div className='navbar bg-accent md:hidden'>
        <div className='flex-1 ml-1'>{!openSearchBar && <SelectTheme />}</div>
        <div className='flex-none gap-2'>
          <label htmlFor='search' onClick={() => setOpenSearchBar(true)}>
            <IoSearchOutline size={30} className='cursor-pointer text-accent-content' />
          </label>
          {openSearchBar === true && (
            <div className='absolute z-50 flex flex-row items-center gap-1 form-control left-1 right-1'>
              <button
                onClick={() => setOpenSearchBar(false)}
                className='z-50 btn btn-accent text-accent-content'>
                <IoMdArrowBack size={30} />
              </button>
              <div className='relative w-full form-control'>
                <label
                  htmlFor='search'
                  className='absolute z-40 transform -translate-y-1/2 top-1/2 text-slate-500 left-3'>
                  <IoSearchOutline size={20} className='cursor-text' />
                </label>
                <input
                  id='search'
                  type='search'
                  value={queryParams || querySearch}
                  placeholder={
                    isLocale === 'id' ? 'Cari berdasarkan judul ..' : 'Search by title ..'
                  }
                  className='absolute w-full pl-10 mx-auto transform -translate-y-1/2 input input-bordered top-1/2'
                  onChange={handleInputSearch}
                />
              </div>
            </div>
          )}
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              data-tip={isLocale === 'id' ? 'Bahasa' : 'Language'}
              className='m-1 text-accent-content hover:scale-105 tooltip tooltip-bottom'>
              <IoLanguageOutline size={25} />
            </div>
            <ul
              tabIndex={0}
              className='mt-5 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32'>
              <li>
                <button onClick={handleClickEn}>
                  English
                  {isLocale === 'en' && <FaCheck size={15} />}
                </button>
              </li>
              <li>
                <button onClick={handleClickId}>
                  Indonesia
                  {isLocale === 'id' && <FaCheck size={15} />}
                </button>
              </li>
            </ul>
          </div>
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src={`https://ui-avatars.com/api/?name=${userLogin?.name}&background=random`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 overflow-hidden'>
              <div className='flex items-center justify-between px-3 py-2 text-base cursor-default'>
                <p className='italic truncate'>{userLogin?.name}</p>
                <span className='ml-5 badge badge-success badge-xs animate-pulse'></span>
              </div>
              <div className='-my-1 divider'></div>
              <li>
                <button className='flex justify-between' onClick={handleLogout}>
                  <span>{isLocale === 'id' ? 'Keluar' : 'Logout'}</span>
                  <MdOutlineLogout size={20} color='red' />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile
