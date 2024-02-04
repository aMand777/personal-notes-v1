import React from 'react'

type SearchContextType = {
  querySearch: string
  setQuerySearch: (value: string) => void
}

const InitialLocaleContext: SearchContextType = {
  querySearch: '',
  setQuerySearch: (value: string) => value,
}

export const SearchContext = React.createContext(InitialLocaleContext)

type LocaleProviderProps = {
  children: React.ReactNode
}
const SearchContextProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [query, setQuery] = React.useState<string>('')

  const contextValue = React.useMemo(
    () => ({
      querySearch: query,
      setQuerySearch: (value: string) => setQuery(value),
    }),
    [query],
  )

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
}

export default SearchContextProvider
