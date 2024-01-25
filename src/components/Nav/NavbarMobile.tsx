import { useContext, useState } from 'react'
// import { func, string } from 'prop-types'
import { IoSearchOutline, IoLanguageOutline } from 'react-icons/io5'
import { IoMdArrowBack } from 'react-icons/io'
// import { putAccessToken } from '../../utils/network-data'
import { MdOutlineLogout } from 'react-icons/md'
import { LocaleContext } from '../../context/LocaleContext'
import { FaCheck } from 'react-icons/fa6'
import { setDataLocale } from '../../utils/storage'
// import UserContext from '../../contexts/UserContext'
import SelectTheme from '../theme/SelectTheme'

// 
// const NavbarMobile = ({ onSearch, value, search }) => {
const NavbarMobile = () => {
  // const { user, setUser } = React.useContext(UserContext)
  const { isLocale, setIsLocale } = useContext(LocaleContext)
  const [openSearchbar, setOpenSearchbar] = useState(false)

  const handleSignOut = () => {
    null
    // setUser(null)
    // putAccessToken('')
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
      <div className='navbar bg-accent md:hidden'>
        <div className='flex-1 ml-1'>{!openSearchbar && <SelectTheme />}</div>
        <div className='flex-none gap-2'>
          <label htmlFor='search' onClick={() => setOpenSearchbar(true)}>
            <IoSearchOutline size={30} className='text-accent-content cursor-pointer' />
          </label>
          {openSearchbar === true && (
            <div className='form-control absolute left-1 flex right-1 z-50 flex-row items-center gap-1'>
              <button
                onClick={() => setOpenSearchbar(false)}
                className='btn btn-accent z-50 text-accent-content'>
                <IoMdArrowBack size={30} />
              </button>
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
                  // value={search || value}
                  // onChange={onSearch}
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
                  src={`https://ui-avatars.com/api/?name=admin&background=random`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 overflow-hidden'>
              <div className='flex justify-between text-base cursor-default items-center px-3 py-2'>
                <p className='italic truncate'>admin</p>
                <span className='badge badge-success badge-xs ml-5 animate-pulse'></span>
              </div>
              <div className='divider -my-1'></div>
              <li>
                <button className='flex justify-between' onClick={handleSignOut}>
                  <span>Sign out</span>
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

// NavbarMobile.propTypes = {
//   onSearch: func.isRequired,
//   value: string,
//   search: string,
// }

export default NavbarMobile