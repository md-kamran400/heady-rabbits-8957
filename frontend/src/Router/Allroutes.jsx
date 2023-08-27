import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import { Checkout } from '../Component/Checkout'
import Login from '../Component/login'
import Signup from '../Component/signup'
import AllProducts from '../components/AllProducts'
import Login2 from '../Component/Login2'
import AddPost from '../Component/AddPost'
import PrivateRoute from './PrivateRoute'


export default function Allroutes() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>  }/>
        <Route path='/Checkout' element={<Checkout/>}></Route>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        <Route path='/signup' element={<Signup/>   }></Route>
        <Route path='/allproduct' element={<AllProducts/>   }></Route>

        <Route path='/login' element={<Login2/>  }></Route>
        <Route path='/addpost' element={
          <PrivateRoute>
               <AddPost/> 
         </PrivateRoute>
         }>

      </Route>


    </Routes>

    </div>
  )
}
