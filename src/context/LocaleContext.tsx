import React from 'react'
import { getCurrentLocale } from '../utils/storage'

type LocaleContextType = {
  isLocale: string
  setIsLocale: (value: string) => void
}

const InitialLocaleContext: LocaleContextType = {
  isLocale: '',
  setIsLocale: (value: string) => value,
}

export const LocaleContext = React.createContext(InitialLocaleContext)

type LocaleProviderProps = {
  children: React.ReactNode
}
const LocaleContextProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = React.useState(() => getCurrentLocale())

  const contextValue = React.useMemo(
    () => ({
      isLocale: locale,
      setIsLocale: (value: string) => setLocale(value),
    }),
    [locale],
  )

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>
}

export default LocaleContextProvider
