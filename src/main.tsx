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

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Navigate to="/login" replace />,
      index: true,
    },
    {
      path: '/home',
      element: <Home />,
      children: [
        {
          path: 'overview',
          element: <GeneralOverview />,
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
