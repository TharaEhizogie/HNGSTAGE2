import './App.css'
import { Routes, Route } from 'react-router-dom';
import Anchor from './components/Anchor';
import Contactpage from './components/Contactpage';



function App () {
  return (
    <Routes>
          <Route path='/' element={<Anchor />} />
          <Route path='/Contactpage' element={<Contactpage />} /> 
      </Routes>
  )
}

export default App

