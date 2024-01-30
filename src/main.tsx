import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LocaleContextProvider from './context/LocaleContext'
import { ThemeProvider } from 'next-themes'
import AuthContextProvider from './context/AuthContext.tsx'
import UserContextProvider from './context/UserContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
        <AuthContextProvider>
          <ThemeProvider attribute='data-theme'>
            <LocaleContextProvider>
              <App />
            </LocaleContextProvider>
          </ThemeProvider>
        </AuthContextProvider>
        </UserContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
