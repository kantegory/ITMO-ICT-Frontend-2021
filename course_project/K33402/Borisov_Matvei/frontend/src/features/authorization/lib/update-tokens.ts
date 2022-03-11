import { api } from 'shared/api'

interface Params {
  access: string
  refresh: string
}

export const updateTokens = ({ access, refresh }: Params) => {
  localStorage.setItem(`access`, access)
  localStorage.setItem(`refresh`, refresh)
  api.defaults.headers.common.Authorization = `Bearer ${access}`
}
