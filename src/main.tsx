import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom'

import './index.css'

import Home from "./pages/home"
import Session from "./pages/session"
import GeneralOverview from './components/home/general-overview/general-overview';
import Products from './components/home/products/products'
import Orders from './components/home/orders/orders'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Navigate to="/session" replace />,
      index: true,
    },
    {
      path: '/:id/:role/home',
      element: <Home />,
      children: [
        {
          path: 'overview',
          element: <GeneralOverview />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'orders',
          element: <Orders />,
        }
      ]
    },
    {
      path: '/session',
      element: <Session />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
