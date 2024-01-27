import LoginForm from '../components/LoginForm'
// import useAuth from '../../../../hooks/useAuth.ts'
import { useQuery } from '@tanstack/react-query'
import { GET_USER_LOGGED_IN } from '../../../../services/user.services.ts'

const Login = () => {
  // const { isAuthenticated, setAuthenticated} = useAuth()

  const { isLoading } = useQuery({
    queryKey: ['GET_USER_LOGGED_IN'],
    queryFn: () => GET_USER_LOGGED_IN(),
    // onSuccess: () => {
    //   setAuthenticated(true)
    // },
    // onError: () => {
    //   setAuthenticated(false)
    // }
  })

  if (isLoading) return null

  return (
    <>
      <LoginForm />
    </>
  )
}

export default Login