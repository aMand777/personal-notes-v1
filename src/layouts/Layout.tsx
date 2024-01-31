import { Outlet } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'
import NavbarMobile from '../components/nav/NavbarMobile'
import { useLocation } from 'react-router-dom'
import AlertConfirm from '../components/alert/AlertConfirm'

const Layout = () => {
  const { pathname } = useLocation()
  const pathAuth = pathname.includes('/auth')

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
      <footer></footer>
    </>
  )
}

export default Layout
