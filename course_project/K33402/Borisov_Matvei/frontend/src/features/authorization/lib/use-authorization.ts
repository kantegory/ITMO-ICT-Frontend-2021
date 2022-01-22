import { useContext } from 'react'

import { AuthorizationContext } from './authorization-context'

export const useAuthorization = () => useContext(AuthorizationContext)
