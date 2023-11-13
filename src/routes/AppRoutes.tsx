import { useRoutes } from 'react-router-dom'

import { DefaultLayout, MainLayout } from '@/layouts'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'

export default function AppRoutes() {
  const routeElements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '*',
      element: (
        <DefaultLayout>
          <NotFound />
        </DefaultLayout>
      )
    }
  ])

  return routeElements
}
