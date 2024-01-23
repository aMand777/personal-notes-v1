import React from 'react'
import { useTheme } from 'next-themes'

type InputOptionThemeProps = {
  label: string
  value: string
}

const InputOptionTheme: React.FC<InputOptionThemeProps> = ({ label, value }) => {
  const { theme, setTheme } = useTheme()
  
  const handleSelected = () => {
    setTheme(value)
  }

  return (
    <>
      <input
        type='radio'
        name='theme-dropdown'
        className={`theme-controller btn btn-sm btn-block btn-ghost justify-start ${
          label === theme && 'bg-primary'
        }`}
        aria-label={label}
        value={value}
        onChange={handleSelected}
      />
    </>
  )
}

export default InputOptionTheme
