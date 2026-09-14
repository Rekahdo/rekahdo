import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import { HeaderProvider } from './contexts/HeaderProvider'
import { Error } from './pages/Error/Error'
import { HeroProvider } from './contexts/HeroProvider'

function App() {
  return (
    <HeroProvider>
      <HeaderProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HeaderProvider>
    </HeroProvider>
  )
}

export default App
