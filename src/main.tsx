import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/login/Login.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { Register } from './pages/register/register.tsx'

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
