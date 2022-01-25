import { useCallback } from 'react'

import { createUser } from 'entities/users/api'
import { useIsLoading } from 'features/helpers/lib'
import { useResult } from 'shared/lib'

export const useAddUser = () => {
  const { isLoading, startLoading, finishLoading } = useIsLoading()
  const { handleResult } = useResult()

  const handleAddUser = useCallback(
    async (values: Components.Schemas.UserRequest) => {
      try {
        startLoading()
        await createUser(values)
        handleResult({
          title: `Спасибо за регистрацию!`,
          status: `success`,
          text: `К вам на почту отправлена ссылка для подтверждения аккаунта`,
        })
      } catch (error) {
        console.error(error)
        finishLoading()
      }
    },
    [finishLoading, handleResult, startLoading],
  )

  return { handleAddUser, isLoading }
}
