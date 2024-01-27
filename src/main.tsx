import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LocaleContextProvider from './context/LocaleContext'
import { ThemeProvider } from 'next-themes'
import AuthContextProvider from './context/AuthContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/route.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='data-theme'>
        <AuthContextProvider>
          <LocaleContextProvider>
            <RouterProvider router={router} />
          </LocaleContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
