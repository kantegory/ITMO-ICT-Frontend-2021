import { createContext } from 'react'

interface AuthorizationContextInterface {
  setIsAuthorized: (authorized: boolean) => void
  isAuthorized: boolean
}

export const AuthorizationContext =
  createContext<AuthorizationContextInterface>({
    setIsAuthorized: () => void null,
    isAuthorized: false,
  })
