import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import { Checkout } from '../Component/Checkout'
import Login from '../Component/login'


export default function Allroutes() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>  }/>
        <Route path='/Checkout' element={<Checkout/>}></Route>
       
    </Routes>

    </div>
  )
}
