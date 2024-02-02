import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Login from './features/auth/login/pages/Login'
import Register from './features/auth/register/pages/Register'
import NotFound from './components/NotFound/NotFound'
import RequireAuth from './components/routes/RequireAuth'
import Notes from './features/notes/pages/Notes'
import Detail from './features/detail/page/Detail'
import Archived from './features/archived/page/Archived'
import Create from './features/create/page/Create'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* public route */}
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          {/* private route */}
          {/* <Route element={<PrivateRoute isAuthenticated={true} />}> */}
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Notes />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/notes/create' element={<Create />} />
            <Route path='/notes/archived' element={<Archived />} />
            <Route path='/notes/detail/:id' element={<Detail />} />
          </Route>
          {/* not found route page */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
