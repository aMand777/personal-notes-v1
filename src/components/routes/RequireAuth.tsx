import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function RequireAuth() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to='/auth/login' replace />
  }
  return <Outlet />
}

export default RequireAuth
