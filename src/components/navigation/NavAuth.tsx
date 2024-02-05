import { IoLanguageOutline } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa6'
import { setDataLocale } from '../../utils/storage'
import SelectTheme from '../theme/SelectTheme'
import useLocale from '../../hooks/useLocale'

const NavAuth = () => {
  const { isLocale, setIsLocale } = useLocale()

  const handleClickEn = () => {
    setIsLocale('en')
    setDataLocale(isLocale)
  }
  const handleClickId = () => {
    setIsLocale('id')
    setDataLocale(isLocale)
  }
  return (
    <div className='sticky top-0 z-50'>
      <div className='navbar bg-accent flex'>
        <div className='w-2/3 ml-5'>
          <SelectTheme />
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            data-tip={isLocale === 'id' ? 'Bahasa' : 'Language'}
            className='m-1 text-accent-content hover:scale-105 tooltip tooltip-bottom'>
            <IoLanguageOutline size={30} />
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
      </div>
    </div>
  )
}

export default NavAuth
