import { useCallback, useMemo } from 'react'

export const useShare = () => {
  const isAvailable = useMemo(() => !!navigator.share, [])

  const handleShare = useCallback(
    (...shareData: Parameters<typeof navigator.share>) =>
      isAvailable && navigator.share(...shareData),
    [isAvailable],
  )

  return { isAvailable, handleShare }
}
