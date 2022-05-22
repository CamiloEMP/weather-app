import { useState, createContext } from 'react'

export const ParamsSearchContext = createContext({
  city: '',
  typeOfSearch: 'realtime',
  options: {},
  setCity: () => {},
  setTypeOfSearch: () => {},
  setOptions: () => {}
})

export const ParamsSearchProvider = ({ children }) => {
  const [city, setCity] = useState('')
  const [typeOfSearch, setTypeOfSearch] = useState('realtime')
  const [options, setOptions] = useState({})

  return (
    <ParamsSearchContext.Provider value={{ city, setCity, typeOfSearch, setTypeOfSearch, options, setOptions }}>
      {children}
    </ParamsSearchContext.Provider>
  )
}
