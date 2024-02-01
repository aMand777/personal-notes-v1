import { IoSearchOutline } from 'react-icons/io5'
import { IoLanguageOutline } from 'react-icons/io5'
import { MdOutlineLogout } from 'react-icons/md'
import { setDataLocale } from '../../utils/storage'
import SelectTheme from '../theme/SelectTheme'
import { removeStorage } from '../../utils/storage'
import { FaCheck } from 'react-icons/fa6'
import useUser from '../../hooks/useUser'
import useLocale from '../../hooks/useLocale'
import { useQueryClient } from '@tanstack/react-query'

const Navbar = () => {
  const queryClient = useQueryClient()
  const { userLogin } = useUser()
  const { isLocale, setIsLocale } = useLocale()
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

  return (
    <>
      <div className='hidden navbar bg-accent md:flex'>
        <div className='w-2/3 ml-5'>
          <SelectTheme />
        </div>
        <div className='flex flex-row w-1/3 gap-2 mr-5'>
          <div className='relative w-full form-control'>
            <label
              htmlFor='search'
              className='absolute z-40 transform -translate-y-1/2 top-1/2 text-slate-500 left-3'>
              <IoSearchOutline size={20} className='cursor-text' />
            </label>
            <input
              id='search'
              type='search'
              placeholder={isLocale === 'id' ? 'Cari berdasarkan judul ..' : 'Search by title ..'}
              className='absolute w-full pl-10 mx-auto transform -translate-y-1/2 input input-bordered top-1/2'
            />
          </div>
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
              <span className='flex items-center justify-between px-3 py-2 text-base cursor-default'>
                <p className='italic'>{userLogin?.name}</p>
                <span className='ml-5 badge badge-success badge-xs animate-pulse'></span>
              </span>
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

export default Navbar
