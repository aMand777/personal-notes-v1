import './App.css'
import Navbar from './components/nav/Navbar'
import NavbarMobile from './components/nav/NavbarMobile'
import { Outlet } from 'react-router-dom'
// import PrivateRoute from './components/routes/PrivateRoute'
// import Login from './features/auth/login/pages/Login'
// import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Outlet />
      {/* <h1 className='text-3xl text-red-500'>Hallo Dunia Fana</h1>
      <Login /> */}

      {/* <Routes>
        <Route element={<Login />}>
          <Route path='auth/login' element={<Login />} />
          <Route element={<PrivateRoute isAuthenticated={false } />}>
            <Route path='/' element={<p>Notes</p>} />
          </Route>
        </Route>
      </Routes> */}
    </>
  )
}

export default App
