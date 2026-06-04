import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaginaLogin from './pages/PaginaLogin.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaginaLogin />
  </StrictMode>,
)
