import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import IntroExperience from './components/IntroExperience.jsx'
import CursorFollower from './components/CursorFollower.jsx'
import { VisitorNameProvider } from './context/VisitorNameContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VisitorNameProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <IntroExperience />
      <CursorFollower />
    </VisitorNameProvider>
  </StrictMode>,
)
