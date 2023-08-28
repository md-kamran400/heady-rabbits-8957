
  import axios from "axios";
import { LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_PENDING, LOGIN_REQUEST_SUCCESS, LOGOUT } from "./actionTypes";
  
export const LoginAction = (user) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST_PENDING });
  axios
    .post(`https://arthub-be.onrender.com/users/login`, user)
    .then((res) => {
      // const token = res.data.token;
      // console.log(token);
      // localStorage.setItem("token", token);
      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data });
     
    

    })
    .catch((error) => {
      dispatch({ type: LOGIN_REQUEST_FAILURE, payload: "Invalid credentials" });
    });
};



  export const LogoutAction = () => (dispatch) => {
    
    axios
      .get("https://arthub-be.onrender.com/users/logout")
      .then((res) => {
        dispatch({ type: LOGOUT,payload:res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };