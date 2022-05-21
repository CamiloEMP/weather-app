import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRealtimeWeather } from '../services/getRealtimeWeather'
import { Waveform } from '@uiball/loaders'
import { CardWeather } from '../components/card-weather'

export const Search = () => {
  const { search } = useParams()
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getRealtimeWeather(search)
      .then(data => {
        if (data.status === 200) {
          setWeather(data.body)
          setLoading(false)
        }
      })
      .catch(err => console.log(err))
  }, [search])

  return (
    <>
      {loading
        ? (
          <Waveform
            size={40}
            lineWeight={3.5}
            speed={1}
            color='#fff'
          />)
        : (<CardWeather weather={weather} />)}
    </>
  )
}
