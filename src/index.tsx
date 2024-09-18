import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Grommet } from 'grommet'

import { BlogPage, MainPage, NotFoundPage } from './components/pages'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
    errorElement: <NotFoundPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Grommet full>
      <RouterProvider router={router} />
    </Grommet>
  </React.StrictMode>,
)
