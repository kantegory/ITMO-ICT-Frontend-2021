import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { resetPasswordConfirm } from 'entities/users/api'
import { useIsLoading } from 'features/helpers/lib'
import { useResult } from 'shared/lib'

export const useResetPasswordConfirm = () => {
  const { isLoading, startLoading } = useIsLoading()
  const { uid, token } = useParams<{ uid: string; token: string }>()
  const { handleResult } = useResult()

  const handleResetPasswordConfirm = useCallback(
    async (values: Components.Schemas.SetPasswordRetypeRequest) => {
      startLoading()
      await resetPasswordConfirm({ ...values, uid, token })
      handleResult({
        title: `Ваш пароль сброшен!`,
        status: `success`,
        text: `Впредь заходите на сервис с новым паролем`,
      })
    },
    [handleResult, startLoading, token, uid],
  )

  return { handleResetPasswordConfirm, isLoading }
}
