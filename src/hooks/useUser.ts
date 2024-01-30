import React from 'react'
import { UserContext } from '../context/UserContext'

const useUser = () => React.useContext(UserContext)

export default useUser
