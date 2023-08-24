import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from "./actionType";
import axios from "axios";

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://projectapi-by-anurag.onrender.com/posts`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data.posts });
      console.log(data.data.posts);
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};