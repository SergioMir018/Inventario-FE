import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'

import Home from "./pages/home"
import Login from "./pages/login"

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
