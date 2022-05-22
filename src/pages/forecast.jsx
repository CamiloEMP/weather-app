import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getForecast } from '../services/get-forecast'

export const Forecast = () => {
  const { city } = useParams()
  useEffect(() => {
    getForecast(city).then(data => console.log(data))
  })
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-4xl text-slate-700'>Forecast</h1>
    </div>
  )
}
