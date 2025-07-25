import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from "react-router";
import Home from './component/frontend/Home';
import About from './component/frontend/About';
import './assets/CSS/style.scss';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
