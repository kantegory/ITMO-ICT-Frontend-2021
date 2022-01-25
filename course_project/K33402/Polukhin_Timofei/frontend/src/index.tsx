import { ConfigProvider } from 'antd'
import { AxiosRequestConfig } from 'axios'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { App } from 'app'
import { Authorization } from 'features/authorization'
import { api } from 'shared/api'

render(
  <Authorization>
    <ConfigProvider componentSize='large'>
      <BrowserRouter>
        <SWRConfig
          value={{
            fetcher: (url: string, config?: AxiosRequestConfig) =>
              api.get(url, config).then((response) => response.data),
          }}
        >
          <App />
        </SWRConfig>
      </BrowserRouter>
    </ConfigProvider>
  </Authorization>,
  document.getElementById(`root`),
)
