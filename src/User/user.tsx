import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Public/App.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen dark:bg-linear-to-b dark:from-[#343438] dark:to-[#1c1c27] dark:text-white bg-linear-to-b from-[#ffffff] to-[#74748b]">
      <App />
    </div>
  </StrictMode>,
)
