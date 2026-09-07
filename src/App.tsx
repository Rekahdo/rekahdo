import { Route, Routes } from 'react-router'
import './App.css'
import { Error } from './pages/Error/Error'
import { Home } from './pages/home/Home'
import { HeaderProvider } from './contexts/HeaderProvider'

function App() {
  return (
    <>
      <HeaderProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HeaderProvider>
    </>
  )
}

export default App
