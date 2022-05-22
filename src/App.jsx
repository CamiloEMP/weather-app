import { Header } from './components/header'
import { Routes, Route, useParams } from 'react-router-dom'
import { Home } from './pages/home'
import { ParamsSearchProvider } from './context/params-search'
import { CallBack } from './pages/callback'

function App () {
  console.log(useParams())
  return (
    <ParamsSearchProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':type/:search' element={<CallBack />} />
      </Routes>
    </ParamsSearchProvider>
  )
}

export default App
