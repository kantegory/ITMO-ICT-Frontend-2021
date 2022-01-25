import { useCallback, useState } from 'react'

export const useIsTrue = (defaultValue = false) => {
  const [isTrue, setIsTrue] = useState(defaultValue)

  const setTrue = useCallback(() => {
    setIsTrue(true)
  }, [])

  const setFalse = useCallback(() => {
    setIsTrue(false)
  }, [])

  const toggle = useCallback(() => {
    setIsTrue(!isTrue)
  }, [isTrue])

  return { isTrue, setTrue, setFalse, toggle }
}
