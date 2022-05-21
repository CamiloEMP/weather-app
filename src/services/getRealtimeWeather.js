/* eslint-disable camelcase */
import { FETCH_OPTIONS, BASE_URL } from '../config'

export const getRealtimeWeather = async (city = 'colombia') => {
  const res = await fetch(`${BASE_URL}/current.json?q=${city}`, FETCH_OPTIONS)
  const data = await res.json()

  const { location, current } = data
  const { country, localtime, name } = location
  const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir, uv, pressure_in, cloud } = current
  const { icon } = condition

  const body = {
    conditionIcon: icon,
    country,
    localtime,
    locationName: name,
    humidity,
    isDay: is_day,
    feelsLike: feelslike_c,
    temperature: temp_c,
    windSpeed: wind_kph,
    windDir: wind_dir,
    uv,
    pressure: pressure_in,
    cloud
  }

  return {
    status: 200,
    body
  }
}
