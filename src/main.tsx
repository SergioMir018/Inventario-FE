import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom'

import './index.css'

import Home from "./pages/home"
import Login from "./pages/login"
import GeneralOverview from './components/home/general-overview/general-overview';
import Products from './components/home/products/products'
import Orders from './components/home/orders/orders'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Navigate to="/login" replace />,
      index: true,
    },
    {
      path: '/admin/home',
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
      path: '/login',
      element: <Login />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
