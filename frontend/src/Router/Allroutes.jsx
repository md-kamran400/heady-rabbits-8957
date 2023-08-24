import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'


export default function Allroutes() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
    
    </Routes>

    </div>
  )
}
