import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { GET_USER_LOGGED_IN } from '../services/user.services'
import useUser from '../hooks/useUser'

type AuthContext = {
  isLoading: boolean
  isAuthenticated: boolean
  setAuthenticated: (value: boolean) => void
}

const InitialAuthContext = {
  isLoading: true,
  isAuthenticated: false,
  setAuthenticated: (value: boolean) => value,
}

export const AuthContext = React.createContext<AuthContext>(InitialAuthContext)

type AuthContextProviderProps = {
  children: React.ReactNode
}
const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false)
  const { setUserLogin } = useUser()

  const { isLoading } = useQuery({
    queryKey: ['GET_USER_LOGGED_IN'],
    queryFn: async () => {
      const result = await GET_USER_LOGGED_IN()
      if (result.status === 'success') {
        setIsAuth(true)
        setUserLogin(result?.data)
      }
      return result
    },
    retry: false,
  })

  const contextValue = React.useMemo(
    () => ({
      isLoading,
      isAuthenticated: isAuth,
      setAuthenticated: (value: boolean) => setIsAuth(value),
    }),
    [isAuth, isLoading],
  )

  return <AuthContext.Provider value={contextValue}> {children} </AuthContext.Provider>
}

export default AuthContextProvider
