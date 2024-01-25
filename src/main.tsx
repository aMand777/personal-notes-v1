import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LocaleContextProvider from './context/LocaleContext'
import { ThemeProvider } from 'next-themes'
import AuthContextProvider from './context/AuthContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/route.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute='data-theme'>
      <AuthContextProvider>
        <LocaleContextProvider>
          <RouterProvider router={router} />
        </LocaleContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
