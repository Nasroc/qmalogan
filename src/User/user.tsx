import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Public/App.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="">
      <App />
    </div>
  </StrictMode>,
)
