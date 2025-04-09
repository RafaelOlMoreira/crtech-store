import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageAbout from './pages/About/PageAbout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageAbout />
  </StrictMode>,
)