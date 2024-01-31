import useLocale from '../hooks/useLocale'

type DateOptions = {
  weekday: 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day?: 'numeric' | '2-digit'
}

const ShowFormattedDate = (date: string) => {
  const { isLocale } = useLocale()
    const options: DateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  return new Date(date).toLocaleDateString(isLocale === 'id' ? 'id-ID' : 'en-US', options)
}

export { ShowFormattedDate }
