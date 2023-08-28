import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST, ADD_POST, SET_SEARCH_QUERY, GET_USER_POST_REQ, GET_USER_POST_SUCCESS, GET_USER_POST_FAIL } from "./actionType";
import axios from "axios";

export const getUsersPostAction = (token)=>(dispatch) => {
  dispatch({ type: GET_USER_POST_REQ });

  const config = {
    headers: {
      Authorization: `Bearer ${token}` // Set the authorization header
    }
  };

  axios
    .get(`https://arthub-be.onrender.com/posts/userpost`, config)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_USER_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_POST_FAIL });
    });
};



