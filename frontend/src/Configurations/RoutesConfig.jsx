import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import TechnologyClubs from '../Pages/TechnologyClubs/TechnologyClubs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Events from '../Pages/Events/Events';
import CreateEvent from '../Pages/CreateEvent/CreateEvent';
import EventDisplay from '../Pages/EventDisplay/EventDisplay';
import Profile from '../Pages/Profile/Profile';
import Payment from '../Pages/Payment/Payment';
const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/clubs' element={<TechnologyClubs/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/createEvent' element={<CreateEvent/>} />
        <Route path='/event/:id' element={<EventDisplay/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/payFees' element={<Payment/>}/>
        <Route path="*" element={<Home/>}/>
    </Routes>
  )
}

export default RoutesConfig