import { Outlet } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'
import NavbarMobile from '../components/nav/NavbarMobile'

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
        <NavbarMobile />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default Layout
