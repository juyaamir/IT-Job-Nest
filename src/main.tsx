import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <Router basename='/IT-Job-Nest'>  
    <StrictMode>
      <App />
  </StrictMode>
  </Router>

)
