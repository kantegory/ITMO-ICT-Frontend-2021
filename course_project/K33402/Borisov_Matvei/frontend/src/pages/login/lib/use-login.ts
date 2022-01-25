import { notification } from 'antd'
import { useCallback } from 'react'

import { obtainToken } from 'entities/users/api'
import { updateTokens, useAuthorization } from 'features/authorization'
import { useIsLoading } from 'features/helpers/lib'

export const useLogin = () => {
  const { setIsAuthorized } = useAuthorization()
  const { startLoading, finishLoading, isLoading } = useIsLoading()

  const handleLogin = useCallback(
    async (params: Parameters<typeof obtainToken>[`0`]) => {
      try {
        startLoading()
        const { data } = await obtainToken(params)
        updateTokens(data)
        setIsAuthorized(true)
      } catch (error) {
        finishLoading()
        console.error(error)
        notification.error({
          message: `Ошибка входа`,
          description: `Неверный логин или пароль`,
        })
      }
    },
    [finishLoading, setIsAuthorized, startLoading],
  )

  return { handleLogin, isLoading }
}
