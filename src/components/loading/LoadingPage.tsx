import React from 'react'

type LoadingPageProps = {
  loading?: string
}

const LoadingPage: React.FC<LoadingPageProps> = ({ loading = 'loading-dots' }) => {
  return (
    <div className='absolute top-0 w-full h-screen z-50'>
      <div className='flex justify-center items-center w-full h-screen bg-base-300'>
        <span className={`loading ${loading} loading-lg text-secondary`}></span>
      </div>
    </div>
  )
}

export default LoadingPage