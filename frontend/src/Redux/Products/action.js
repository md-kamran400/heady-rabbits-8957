import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST, ADD_POST } from "./actionType";
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


export const addPost = (postData, headers) => (dispatch) => {
  axios
    .post('https://projectapi-by-anurag.onrender.com/posts/add', postData, { headers }) 
    .then((response) => {
      dispatch({ type: ADD_POST });
      
    })
    .catch((error) => {
      console.error('Error adding post:', error);
      
    });
};



