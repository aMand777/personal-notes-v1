import React from 'react'
import { LocaleContext } from '../context/LocaleContext'

const useLocale = () => React.useContext(LocaleContext)

export default useLocale