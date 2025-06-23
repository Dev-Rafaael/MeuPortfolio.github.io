import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import LayoutZap from './components/LayoutZap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutZap>
    <App />
    </LayoutZap>
  </StrictMode>,
)
