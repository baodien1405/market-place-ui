import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routes/AppRoutes'
import { theme } from './utils'

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <AppRoutes />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
