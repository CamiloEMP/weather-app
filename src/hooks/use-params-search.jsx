import { useContext } from 'react'
import { ParamsSearchContext } from '../context/params-search'

export const useParamsSearch = () => {
  const {
    city,
    typeOfSearch,
    options,
    setCity,
    setOptions,
    setTypeOfSearch
  } = useContext(ParamsSearchContext)

  const setParamsToRealtimeWeather = (city) => {
    setCity(city)
    setTypeOfSearch('realtime')
  }

  const setParamsToForecastWeather = (city, options) => {
    setCity(city)
    setTypeOfSearch('forecast')
    setOptions(options)
  }

  const setParamsToHistoryWeather = (city, options) => {
    setCity(city)
    setTypeOfSearch('history')
    setOptions(options)
  }

  return {
    city,
    typeOfSearch,
    options,
    setParamsToRealtimeWeather,
    setParamsToForecastWeather,
    setParamsToHistoryWeather,
    setTypeOfSearch
  }
}
