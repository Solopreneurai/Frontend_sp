import './App.css'
// import Router from '../routes'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Portal from './pages/Portal'
// import Bot from './pages/Bot'

function App() {

  return (
    // <Router />
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal/*" element={<Portal />} />
         
        </Routes>
    </div>
  )
}

export default App
