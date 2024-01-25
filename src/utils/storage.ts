export const setDataLocale = (value: string) => {
  localStorage.setItem('locale', value === 'id' ? 'en' : 'id')
}

export const getCurrentLocale = () => {
  const currentLocale = localStorage.getItem('locale') || 'id'
  return currentLocale
}

export const setStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const removeStorage = (key: string) => {
  localStorage.removeItem(key)
}
