import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    const media = matchMedia(query)
    const listener = () => {
      setIsMatch(media.matches)
    }
    media.addEventListener(`change`, listener)
    listener()
    return () => media.removeEventListener(`change`, listener)
  }, [query])

  return { isMatch }
}

export { useMediaQuery }
