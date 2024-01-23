import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LocaleContextProvider from './context/LocaleContext'
import { ThemeProvider } from 'next-themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute='data-theme'>
      <LocaleContextProvider>
        <App />
      </LocaleContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
