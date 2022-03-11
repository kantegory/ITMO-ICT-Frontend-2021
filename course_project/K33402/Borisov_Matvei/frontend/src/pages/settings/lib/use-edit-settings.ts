import { notification } from 'antd'
import { useCallback } from 'react'
import { mutate } from 'swr'

import { updateUser } from 'entities/users/api'
import { useIsLoading } from 'features/helpers/lib'
import { routes } from 'shared/api'

export const useEditSettings = () => {
  const { isLoading, startLoading, finishLoading } = useIsLoading()

  const handleEditUser = useCallback(
    async (values: Components.Schemas.UserRequest) => {
      try {
        startLoading()
        const { data } = await updateUser(values)
        notification.success({ message: `Настройки обновлены` })
        await mutate(routes.me, data)
      } finally {
        finishLoading()
      }
    },
    [finishLoading, startLoading],
  )

  return { handleEditUser, isLoading }
}
