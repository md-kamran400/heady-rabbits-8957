import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const isAuth=useSelector((store)=>store.Loginreducer.isAuth)

    return isAuth ? children : <Navigate to="/login" />;
}
