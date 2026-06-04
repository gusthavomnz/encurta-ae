import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaginaRegister from './pages/PaginaRegister'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaginaRegister />
  </StrictMode>,
)
