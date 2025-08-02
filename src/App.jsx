import { useState } from 'react'
import reactLogo from './assets/react.svg'

import '../src/assets/css/style.scss';
import './assets/css/style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Pricing from './components/frontend/Pricing';
import Blog from './components/frontend/Blog';
import Contact from './components/frontend/Contact';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App


