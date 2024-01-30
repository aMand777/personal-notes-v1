import React from 'react'
type UserLogin = {
  id: string
  name: string
  email: string
}

type UserContext = {
  userLogin: UserLogin
  setUserLogin: (value: UserLogin) => void
}

const InitialUserContext = {
  userLogin: {
    id: '',
    name: '',
    email: '',
  },
  setUserLogin: (value: UserLogin) => value,
}

export const UserContext = React.createContext<UserContext>(InitialUserContext)

type UserContextProviderProps = {
  children: React.ReactNode
}
const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<UserLogin>({
    id: '',
    name: '',
    email: '',
  })

  const contextValue = React.useMemo(
    () => ({
      userLogin: user,
      setUserLogin: (value: UserLogin) => setUser(value),
    }),
    [user],
  )

  return <UserContext.Provider value={contextValue}> {children} </UserContext.Provider>
}

export default UserContextProvider
