import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import {Toaster} from 'sonner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  <Toaster position="top-right"></Toaster>
  </StrictMode>,
)
