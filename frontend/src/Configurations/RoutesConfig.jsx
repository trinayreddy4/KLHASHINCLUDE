import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import TechnologyClubs from '../Pages/TechnologyClubs/TechnologyClubs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/clubs' element={<TechnologyClubs/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="*" element={<Home/>}/>
    </Routes>
  )
}

export default RoutesConfig