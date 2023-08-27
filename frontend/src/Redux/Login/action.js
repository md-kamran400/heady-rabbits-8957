
  import axios from "axios";
import { LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_PENDING, LOGIN_REQUEST_SUCCESS, LOGOUT } from "./actionTypes";
  
  export const LoginAction = (user) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST_PENDING });
    console.log(user);
    axios
      .post(`https://projectapi-by-anurag.onrender.com/users/login`, user)
      .then((res) => {
        dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data });
        console.log(res.data);
      })
      .catch(() => dispatch({ type: LOGIN_REQUEST_FAILURE }));
  };


  export const LogoutAction = () => (dispatch) => {
    
    axios
      .get("https://projectapi-by-anurag.onrender.com/users/logout")
      .then((res) => {
        dispatch({ type: LOGOUT,payload:res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };