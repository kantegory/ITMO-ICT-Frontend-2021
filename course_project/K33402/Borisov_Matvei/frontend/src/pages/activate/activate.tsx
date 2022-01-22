import { Spin } from 'antd'
import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { activateUser } from 'entities/users/api'
import { useIsTrue, useResult } from 'shared/lib'

export const Activate = () => {
  const { uid, token } = useParams<{ uid: string; token: string }>()
  const { handleResult } = useResult()
  const { isTrue, setTrue } = useIsTrue()

  const handleActivateUser = useCallback(async () => {
    if (isTrue) {
      return
    }
    setTrue()
    try {
      await activateUser({ uid, token })
      handleResult({
        title: `Ваш аккаунт подтвреждён!`,
        status: `success`,
        text: `Теперь вы можете пользоваться сервисом`,
      })
    } catch (error) {
      console.error(error)
      handleResult({
        title: `Ошибка подтверждения аккаунта!`,
        status: `error`,
      })
    }
  }, [handleResult, isTrue, setTrue, token, uid])

  useEffect(() => {
    handleActivateUser().then()
  }, [handleActivateUser])

  return (
    <Spin
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    />
  )
}
