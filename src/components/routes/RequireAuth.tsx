import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import LoadingPage from '../loading/LoadingPage'

function RequireAuth() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <LoadingPage />
  } else if (!isAuthenticated) {
    return <Navigate to='/auth/login' replace />
  } else {
    return <Outlet />
  }
}

export default RequireAuth
