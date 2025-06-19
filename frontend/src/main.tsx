import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IndexPage } from './pages/IndexPage.tsx'
import { CartPage } from './pages/CartPage.tsx'
import { AccountPage } from './pages/AccountPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([{path: "/", element: <IndexPage/>}, {path: "/cart", element: <CartPage/>},
  {path:"/account", element: <AccountPage/>}, {path: "/login", element: <LoginPage />},
  {path: "/register", element: <RegisterPage/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
