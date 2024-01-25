// import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const authUser = false

function RequireAuth() {
  console.log('useAuth===>', useAuth)

  if (!authUser) {
    (<Navigate to='/login' />)
  }

  return <Outlet />
}

export default RequireAuth