import { notification } from 'antd'
import { useCallback } from 'react'

import { updatePassword } from 'entities/users/api'
import { useIsLoading } from 'features/helpers/lib'

export const useEditPassword = () => {
  const { isLoading, startLoading, finishLoading } = useIsLoading()

  const handleEditPassword = useCallback(
    async (values: Components.Schemas.SetPasswordRetypeRequest) => {
      try {
        startLoading()
        await updatePassword(values)
        notification.success({ message: `Пароль обновлен` })
      } finally {
        finishLoading()
      }
    },
    [finishLoading, startLoading],
  )

  return { handleEditPassword, isLoading }
}
