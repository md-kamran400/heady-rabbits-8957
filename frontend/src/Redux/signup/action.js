


import {
    SIGN_REQUEST_FAILURE,
    SIGN_REQUEST_PENDING,
    SIGN_REQUEST_SUCCESS,
  } from "./actionTypes";
  import axios from "axios";
  
  export const SignUp = (obj) => (dispatch) => {
    dispatch({ type: SIGN_REQUEST_PENDING });
    console.log(obj);
    axios
      .post(`https://projectapi-by-anurag.onrender.com/users/register`, obj)
      .then((res) => {
        dispatch({ type: SIGN_REQUEST_SUCCESS, payload: res.data });
        console.log(res);
      })
      .catch(() => dispatch({ type: SIGN_REQUEST_FAILURE }));
  };