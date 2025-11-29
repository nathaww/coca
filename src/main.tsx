import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import SmoothScrolling from './components/lib/SmoothScrolling.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrolling>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SmoothScrolling>
  </StrictMode>,
)
