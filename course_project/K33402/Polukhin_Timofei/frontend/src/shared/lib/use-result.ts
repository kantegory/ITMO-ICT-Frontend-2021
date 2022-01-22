import { ResultStatusType } from 'antd/es/result'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'
import { useIsTrue } from 'shared/lib/use-is-true'

export interface ResultData {
  title?: string
  text?: string
  status?: ResultStatusType
}

export const useResult = () => {
  const history = useHistory()
  const { isTrue: isPushed, setTrue: setIsPushed } = useIsTrue()

  const handleResult = useCallback(
    (data: ResultData) => {
      if (isPushed) {
        return
      }
      history.push({
        pathname: PUBLIC_PATH.RESULT,
        search: new URLSearchParams(data as Record<string, string>).toString(),
      })
      setIsPushed()
    },
    [history, isPushed, setIsPushed],
  )

  return { handleResult }
}
