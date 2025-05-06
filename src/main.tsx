import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from '../src/pages/Dashboard'



const globalStyle = document.createElement('style')
globalStyle.innerHTML = `
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #1e1e1e;
    overflow-x: hidden;
  }
`
document.head.appendChild(globalStyle)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
