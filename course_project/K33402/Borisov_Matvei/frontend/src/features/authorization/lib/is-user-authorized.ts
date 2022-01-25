import { api, routes } from 'shared/api'

import { updateTokens } from './update-tokens'

export const isUserAuthorized = async () => {
  const refresh = localStorage.getItem(`refresh`)

  if (!refresh) {
    return false
  }

  try {
    const { data } = await api.post(routes.tokenRefresh, { refresh })
    updateTokens(data)

    return true
  } catch (error: any) {
    if (error?.response?.status !== 401) {
      throw new Error(error)
    }
    localStorage.clear()

    return false
  }
}
