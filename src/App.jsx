import './App.css'
import { Routes, Route } from 'react-router-dom';
import Anchor from './components/Anchor';
import Contact from './components/Contact';
import Main from './components/Body';



function App () {
  return (
    <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Contact.jsx' element={<Contact />} /> 
      </Routes>
  )
}

export default App

