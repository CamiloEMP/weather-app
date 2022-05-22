/* eslint-disable camelcase */
import { FETCH_OPTIONS, BASE_URL } from '../config'

export const getForecast = async (city = 'colombia', days = '') => {
  const res = await fetch(`${BASE_URL}/forecast.json?q=${city}&alerts=yes`, FETCH_OPTIONS)
  const data = await res.json()

  return {
    status: 200,
    data
  }
}
