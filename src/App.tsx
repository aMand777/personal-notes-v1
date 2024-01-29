import './App.css'
import { GET_USER_LOGGED_IN } from './services/user.services'
import { useQuery } from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import Layout from './layouts/Layout'
import Login from './features/auth/login/pages/Login'
import Register from './features/auth/register/pages/Register'
import NotFound from './components/NotFound/NotFound'
import LoadingPage from './components/loading/LoadingPage'
import RequireAuth from './components/routes/RequireAuth'

function App() {
  const { setAuthenticated } = useAuth()
  const { isLoading } = useQuery({
    queryKey: ['GET_USER_LOGGED_IN'],
    queryFn: () => GET_USER_LOGGED_IN(),
    retry: false,
    select: (data) => {
      if (data !== undefined) {
        setAuthenticated(true)
      }
      return data
    },
  })

  if (isLoading) return <LoadingPage />

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
            <Route path='/' element={<p>Notes Page</p>} />
            <Route path='/notes' element={<p>Notes</p>} />
          </Route>
          {/* not found route page */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
