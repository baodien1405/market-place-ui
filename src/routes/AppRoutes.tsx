import { useRoutes } from 'react-router-dom'

import { DefaultLayout, MainLayout } from '@/layouts'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import { path } from '@/constants'

export default function AppRoutes() {
  const routeElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: path.notFound,
      element: (
        <DefaultLayout>
          <NotFound />
        </DefaultLayout>
      )
    }
  ])

  return routeElements
}
