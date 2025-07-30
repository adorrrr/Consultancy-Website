import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './assets/css/style.scss';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Pricing from './components/frontend/Pricing';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App


