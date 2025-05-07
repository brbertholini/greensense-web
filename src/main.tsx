import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

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
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
