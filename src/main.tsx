import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom'

import './index.css'

import AdminHome from "./pages/admin-home"
import Session from "./pages/session"
import GeneralOverview from './components/admin-home/general-overview/general-overview';
import Products from './components/admin-home/products/products'
import Orders from './components/admin-home/orders/orders'
import ClientHome from './pages/client-home'
import Shop from './components/client-home/shop/shop'
import Cart from './components/client-home/cart/cart'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Navigate to="/session" replace />,
      index: true,
    },
    {
      path: '/:id/:role',
      element: <AdminHome />,
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
      path: '/:id/client',
      element: <ClientHome />,
      children: [
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'cart',
          element: <Cart />,
        }
      ]
    },
    {
      path: 'session',
      element: <Session />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
