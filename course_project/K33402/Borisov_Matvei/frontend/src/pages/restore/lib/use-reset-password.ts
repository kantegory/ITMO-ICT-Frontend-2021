import { useCallback } from 'react'

import { resetPassword } from 'entities/users/api'
import { useIsLoading } from 'features/helpers/lib'
import { useResult } from 'shared/lib'

export const useResetPassword = () => {
  const { isLoading, startLoading } = useIsLoading()
  const { handleResult } = useResult()

  const handleResetPassword = useCallback(
    async (values: Components.Schemas.SendEmailResetRequest) => {
      startLoading()
      await resetPassword(values)
      handleResult({
        title: `Письмо отправлено`,
        text: `Вам на почту отправлена ссылка для сброса пароля`,
        status: `success`,
      })
    },
    [handleResult, startLoading],
  )

  return { handleResetPassword, isLoading }
}
