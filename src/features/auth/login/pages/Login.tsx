import NavAuth from '../../../../components/nav/NavAuth.tsx'
import FormLogin from '../components/FormLogin.tsx'
import useAuth from '../../../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to='/' replace />
  }

  return (
    <>
      <NavAuth />
      <FormLogin />
    </>
  )
}

export default Login
