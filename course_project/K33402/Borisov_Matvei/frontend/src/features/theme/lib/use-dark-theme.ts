import { ConfigProvider } from 'antd'
import { useEffect } from 'react'

import { useMediaQuery } from 'shared/lib'

export const useDarkTheme = () => {
  const { isMatch } = useMediaQuery(`(prefers-color-scheme: dark)`)

  useEffect(() => {
    ConfigProvider.config({
      theme: { primaryColor: isMatch ? `#177ddc` : `#272727` },
    })
  }, [isMatch])
}
