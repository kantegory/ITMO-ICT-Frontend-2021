import './styles/index.scss'
import React from 'react'

import { useAuthorization } from 'features/authorization'
import { Routing } from 'features/routing'
import { useDarkTheme } from 'features/theme/lib'
import { PrivateLayout } from 'widgets/private-layout'
import { PublicLayout } from 'widgets/public-layout'

import { privateRoutes, publicRoutes } from './lib/routes'

export const App = () => {
  useDarkTheme()
  const { isAuthorized } = useAuthorization()

  return isAuthorized ? (
    <PrivateLayout>
      <Routing routes={privateRoutes} />
    </PrivateLayout>
  ) : (
    <PublicLayout>
      <Routing routes={publicRoutes} />
    </PublicLayout>
  )
}
