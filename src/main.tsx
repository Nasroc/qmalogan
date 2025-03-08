import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Public/App.css'
import App from './Public/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen custom-bg custom-dark">
      <App />
    </div>
  </StrictMode>,
)
