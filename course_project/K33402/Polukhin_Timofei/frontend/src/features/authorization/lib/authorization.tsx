import { ReactNode, useEffect, useMemo, useState } from 'react'

import { AuthorizationContext } from './authorization-context'
import { isUserAuthorized } from './is-user-authorized'

interface Props {
  children: ReactNode
}

export const Authorization = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    isUserAuthorized()
      .then(setIsAuthorized)
      .finally(() => setIsLoading(false))
  }, [])

  const contextValue = useMemo(
    () => ({ isAuthorized, setIsAuthorized }),
    [isAuthorized],
  )

  if (isLoading) {
    return null
  }

  return (
    <AuthorizationContext.Provider value={contextValue}>
      {children}
    </AuthorizationContext.Provider>
  )
}
