import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from "./actionType";
import axios from "axios";

export const getAllProducts = (page) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://projectapi-by-anurag.onrender.com/posts?page=${page}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: {post:data.data.posts,total:data.data.totalItems} });
      console.log(data.data.posts);
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};