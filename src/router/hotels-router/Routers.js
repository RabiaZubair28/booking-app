import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../../pages/Home';
import Hotels from '../../pages/Hotels';
import HotelDetails from '../../components/hotels-components/HotelDetails';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:hotelId' element={<HotelDetails />} />
    </Routes>
  )
}

export default Routers