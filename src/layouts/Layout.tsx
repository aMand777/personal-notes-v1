import { Outlet } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'
import NavbarMobile from '../components/nav/NavbarMobile'
import { useLocation } from 'react-router-dom'
import AlertConfirm from '../components/alert/AlertConfirm'
import NavMenu from '../components/nav/NavMenu'

const Layout = () => {
  const { pathname } = useLocation()
  const pathAuth = pathname.includes('/auth')
  const pathDetail = pathname.includes('/notes/detail')

  return (
    <>
      <header className={`${pathAuth ? 'hidden' : ''} sticky top-0 z-40`}>
        <Navbar />
        <NavbarMobile />
      </header>
      <main>
        <AlertConfirm />
        <Outlet />
      </main>
      <footer
        className={`${
          pathDetail || pathAuth ? 'hidden' : ''
        } fixed bottom-1 w-72 left-1/2 -translate-x-1/2 mt-5`}>
        <NavMenu />
      </footer>
    </>
  )
}

export default Layout
