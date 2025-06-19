import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IndexPage } from './pages/IndexPage.tsx'
import { CartPage } from './pages/CartPage.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([{path: "/", element: <IndexPage/>}, {path: "/cart", element: <CartPage/>}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
