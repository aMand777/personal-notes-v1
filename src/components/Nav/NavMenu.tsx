import { RiMenuAddFill } from 'react-icons/ri'
import { FaArchive } from 'react-icons/fa'
import { MdSpeakerNotes } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useLocale from '../../hooks/useLocale'

const NavMenu = () => {
  const { isLocale } = useLocale()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <>
      <ul className='menu menu-horizontal bg-base-200 rounded-box gap-[50px] items-center'>
        <li>
          <div
            onClick={() => navigate('/notes')}
            className={`tooltip ${
              pathname === '/notes' || pathname === '/' ? 'text-accent hover:text-accent' : ''
            }`}
            data-tip={isLocale === 'id' ? 'Catatan' : 'Notes'}>
            <MdSpeakerNotes size={25} />
          </div>
        </li>
        <li>
          <div
            onClick={() => navigate('/notes/archived')}
            className={`tooltip ${
              pathname === '/notes/archived' && 'text-accent hover:text-accent'
            }`}
            data-tip={isLocale === 'id' ? 'Arsip' : 'Archive'}>
            <FaArchive size={25} />
          </div>
        </li>
        <li>
          <Link
            to='/notes/create'
            className='tooltip'
            data-tip={isLocale === 'id' ? 'Buat Catatan' : 'Create'}>
            <RiMenuAddFill size={25} />
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavMenu
