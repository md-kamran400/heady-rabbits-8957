
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


 import "../Login.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../Redux/Login/action";
import { useToast } from '@chakra-ui/react'

const Login2 = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const navigate = useNavigate();
const dispatch=useDispatch()
const isLoading=useSelector((store)=>store.Loginreducer.isLoading)
const isAuth=useSelector((store)=>store.Loginreducer.isAuth)
const token=useSelector((store)=>store.Loginreducer.token)
const error = useSelector((store) => store.Loginreducer.error);


const toast = useToast()

const handleLogint=(e)=>{

  e.preventDefault()
  let user  ={
    email,password
  }

  dispatch(LoginAction(user))
 
}


console.log(isAuth);
useEffect(() => {
  if (isAuth) {

    toast({
      title: 'Welcome back! Youve successfully logged in',
    
      status: 'success',
      duration: 4000,
      isClosable: true,
    })

    navigate("/"); 
  }
}, [isAuth]);

  return (
    <div className="login-container">
     
        <div className="login-form">
          <div className="form-heading">
            <b className="specal-text">LOGIN</b>
          </div>
          <form onSubmit={handleLogint}>
            <label className="input-label">
              EMAIL:
              <br />
              <input
                className="input-field"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label className="input-label">
              PASSWORD:
              <br />
              <input
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button className="submit-button" type="submit">
            {isLoading ? "Logging In..." : "Login"}
            </button>
            {error && <p className="error-message">{error}</p>}
                <p style={{color:"#06264a",fontWeight:"700"}}>Not Registered? <Link to="/signup">Sign Up here</Link></p>

          </form>
         
        </div>
    
    </div>
  );
};

export default Login2;