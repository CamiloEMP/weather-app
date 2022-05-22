import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getRealtimeWeather } from '../services/get-realtime-weather'
import { JellyTriangle } from '@uiball/loaders'
import { CardWeather } from '../components/card-weather'

import { ThemeContext } from '../theme/theme-context'

export const Realtime = () => {
  const { search } = useParams()
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    getRealtimeWeather(search)
      .then(data => {
        if (data.status === 200) {
          setLoading(false)
          setWeather(data.body)
        } else {
          setLoading(false)
          setError(true)
        }
      })
      .catch(err => console.log(err))
  }, [search])

  return (
    <>
      {loading
        ? (
          <div className='flex justify-center mt-12'>
            <JellyTriangle
              size={45}
              speed={1.75}
              color={theme === 'dark' ? '#fff' : '#000'}
              // color='#0262df'
            />
          </div>
          )
        : (
          <CardWeather weather={weather} />
          )}
      {error && <div className='text-center text-red-600'>Error</div>}
    </>
  )
}
