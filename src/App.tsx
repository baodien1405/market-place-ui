import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'

import AppRoutes from '@/routes/AppRoutes'
import axiosClient from './api/axiosClient'
import { theme } from './utils'

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <SWRConfig value={{ shouldRetryOnError: false, fetcher: (url) => axiosClient.get(url) }}>
          <AppRoutes />
        </SWRConfig>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
