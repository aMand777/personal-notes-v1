export const setDataLocale = (value: string) => {
  localStorage.setItem('locale', value === 'id' ? 'en' : 'id')
}

export const getCurrentLocale = () => {
  const currentLocale = localStorage.getItem('locale') || 'id'
  return currentLocale
}
