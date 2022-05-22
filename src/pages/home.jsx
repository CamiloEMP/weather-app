import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useParamsSearch } from '../hooks/use-params-search'
import { InputSearch } from '../components/input.search'

export const Home = () => {
  const [search, setSearch] = useState('')
  const { typeOfSearch } = useParamsSearch()
  const navigate = useNavigate()
  return (
    <section>
      <h2 className='text-5xl dark:text-slate-200 text-center font-bold'>Search a city</h2>
      {(typeOfSearch === 'realtime' || typeOfSearch === '') && <div>Realtime</div>}
      {typeOfSearch === 'forecast' && <div>forecast</div>}
      <InputSearch search={search} setSearch={setSearch} />
      <button onClick={() => navigate(`${search}`)}>Buscar</button>
    </section>
  )
}
