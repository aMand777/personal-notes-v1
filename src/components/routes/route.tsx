import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'
import App from '../../App'
import Login from '../../features/auth/login/pages/Login'
import RequireAuth from './RequireAuth'
import NotFound from '../NotFound/NotFound'
import Register from '../../features/auth/register/pages/Register'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<NotFound />}>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />

      <Route element={<RequireAuth />}>
        <Route index element={<p>HomePage</p>} />

        {/* <Route path='archive' element={<ArchivesPage />} /> */}
        {/* <Route path='notes/:id' element={<Detail />} /> */}
      </Route>
    </Route>,
  ),
)
