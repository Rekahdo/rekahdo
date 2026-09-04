import { Route, Routes } from 'react-router'
import './App.css'
import { Error } from './pages/Error/Error'
import { Home } from './pages/home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
