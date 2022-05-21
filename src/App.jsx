import { Background } from './theme/background'
import { Header } from './components/header'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Search } from './pages/search'

function App () {
  return (
    <Background>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':search' element={<Search />} />
      </Routes>
    </Background>
  )
}

export default App
