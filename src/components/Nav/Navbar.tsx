import { IoSearchOutline } from 'react-icons/io5'
import { IoLanguageOutline } from 'react-icons/io5'
import { MdOutlineLogout } from 'react-icons/md'
import { setDataLocale } from '../../utils/storage'
import SelectTheme from '../theme/SelectTheme'
import { removeStorage } from '../../utils/storage'
import { FaCheck } from 'react-icons/fa6'
import useAuth from '../../hooks/useAuth'
import useUser from '../../hooks/useUser'
import useLocale from '../../hooks/useLocale'

const Navbar = () => {
  const { setAuthenticated } = useAuth()
  const { userLogin } = useUser()
  const { isLocale, setIsLocale } = useLocale()
  const handleLogout = () => {
    setAuthenticated(false)
    removeStorage('accessToken')
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
      <div className='navbar bg-accent md:flex hidden'>
        <div className='w-2/3 ml-5'>
          <SelectTheme />
        </div>
        <div className='flex flex-row gap-2 w-1/3 mr-5'>
          <div className='form-control w-full relative'>
            <label
              htmlFor='search'
              className='absolute top-1/2 transform -translate-y-1/2 text-slate-500 z-40 left-3'>
              <IoSearchOutline size={20} className='cursor-text' />
            </label>
            <input
              id='search'
              type='search'
              placeholder={isLocale === 'id' ? 'Cari berdasarkan judul ..' : 'Search by title ..'}
              className='input input-bordered w-full mx-auto pl-10 absolute top-1/2 transform -translate-y-1/2'
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
              <span className='flex justify-between text-base cursor-default items-center px-3 py-2'>
                <p className='italic'>{userLogin?.name}</p>
                <span className='badge badge-success badge-xs ml-5 animate-pulse'></span>
              </span>
              <div className='divider -my-1'></div>
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
