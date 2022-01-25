import { notification } from 'antd'
import axios from 'axios'

export const baseURL = `https://tasks.api.xlvn.ru/v1`

export const api = axios.create({ baseURL })

api.interceptors.response.use(undefined, (error) => {
  notification.error({
    message: `Ошибка запроса`,
    description:
      JSON.stringify(error.response.data).length < 256 &&
      Object.entries(error.response.data).map(
        ([key, value]) =>
          `${key.charAt(0).toUpperCase()}${key.slice(1)}: ${
            Array.isArray(value) ? value.join(`, `) : value
          }`,
      ),
  })
  throw new Error(error.message)
})
