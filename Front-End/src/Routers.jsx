import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './Login'
import Welcome from './Welcome'
import Signup from './Signup'
import LandingOwner from './LandingOwner'
import LandingFarmer from './LandingFarmer'
import EquipOwner from './EquipOwner'
import RentEquipOwner from './RentEquipOwner'
import ExploreEquipLF from './ExploreEquipLF'
import PlacedOrderFarmer from './PlacedOrderFarmer'
// import EquipmentCard from './EquipmentCard'


function Routers() {
    return (
        <Routes>
            {/* <Route path='/cardData' element={<EquipmentCard/>}></Route> */}

            <Route path='/whishlistLO' element={<RentEquipOwner/>}></Route>
            <Route path='/equipLO' element={<EquipOwner/>}></Route>
            <Route path='/landingOwner' element={<LandingOwner/>}></Route>

            <Route path='/landingFarmer' element={<LandingFarmer/>}></Route>
            <Route path='/exploreLF' element={<ExploreEquipLF/>}></Route>
            <Route path='/placedOrderFarmer' element={<PlacedOrderFarmer/>}></Route>

            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/signup' element={<Signup/>} ></Route>

            <Route path='/' element={<Welcome/>} ></Route>
        </Routes>
    )
}

export default Routers