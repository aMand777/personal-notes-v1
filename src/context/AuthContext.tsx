import React, { createContext } from 'react'

type AuthContext = {
  isAuthenticated: boolean
  setAuthenticated: (value: boolean) => void
}

const InitialAuthContext: AuthContext = {
  isAuthenticated: false,
  setAuthenticated: (value: boolean) => value,
}

export const AuthContext = createContext(InitialAuthContext)

type AuthContextProviderProps = {
  children: React.ReactNode
}
const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false)

  const contextValue = React.useMemo(
    () => ({
      isAuthenticated: isAuth,
      setAuthenticated: (value: boolean) => setIsAuth(value),
    }),
    [isAuth])
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
