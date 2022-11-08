import './App.css'
import { Routes, Route } from 'react-router-dom';
import Anchor from './components/Anchor';
import Contact from './components/contact';
import Main from './components/Body';



function App () {
  return (
    <Routes>
         <Route path='/' element={<Anchor />} />
          
          <Route path='/contact' element={<Contact />} /> 
      </Routes>
  )
}

export default App

