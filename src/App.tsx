import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import { HeaderProvider } from './contexts/HeaderProvider'
import { Error } from './pages/error/Error'

function App() {
  return (
    <HeaderProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HeaderProvider>
  )
}

export default App
