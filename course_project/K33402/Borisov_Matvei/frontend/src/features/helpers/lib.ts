import { useIsTrue, useMediaQuery } from 'shared/lib'

export const useIsDesktop = () => {
  const { isMatch } = useMediaQuery(`(min-width: 1024px)`)
  return { isDesktop: isMatch }
}

export const useIsVisible = (defaultValue?: boolean) => {
  const { isTrue, setTrue, setFalse, toggle } = useIsTrue(defaultValue)
  return {
    isVisible: isTrue,
    show: setTrue,
    hide: setFalse,
    toggleVisibility: toggle,
  }
}

export const useIsLoading = (defaultValue?: boolean) => {
  const { isTrue, setTrue, setFalse, toggle } = useIsTrue(defaultValue)
  return {
    isLoading: isTrue,
    startLoading: setTrue,
    finishLoading: setFalse,
    toggleLoading: toggle,
  }
}
