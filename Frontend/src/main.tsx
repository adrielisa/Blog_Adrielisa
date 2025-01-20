import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import appRoutes from './AppRoutes.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(appRoutes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
