// import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

// const authUser = true

function RequireAuth() {
  const { isAuthenticated } = useAuth()
  console.log('isAuthenticated===>', isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to='/auth/login' replace />
  }
  return <Outlet />
}

export default RequireAuth
