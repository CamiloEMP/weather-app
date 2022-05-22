import { useParamsSearch } from '../hooks/use-params-search'
import { Forecast } from './forecast'
import { History } from './history'
import { Realtime } from './realtime'

export const CallBack = () => {
  const { typeOfSearch, city, options } = useParamsSearch()

  return (
    <>
      {typeOfSearch === 'realtime' && <Realtime city={city} />}
      {typeOfSearch === 'forecast' && <Forecast city={city} options={options} />}
      {typeOfSearch === 'history' && <History city={city} options={options} />}
    </>
  )
}
