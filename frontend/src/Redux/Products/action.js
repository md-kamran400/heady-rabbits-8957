import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST, ADD_POST, SET_SEARCH_QUERY } from "./actionType";
import axios from "axios";

export const getAllProducts = (page, searchQuery) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });

  
  const queryParams = `?page=${page}${searchQuery ? `&search=${searchQuery}` : ''}`;

  axios
    .get(`https://arthub-be.onrender.com/posts${queryParams}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: { post: data.data.posts, total: data.data.totalItems } });
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};

export const addPost = (postData, headers) => (dispatch) => {
  axios
    .post('https://arthub-be.onrender.com/posts/add', postData, { headers }) 
    .then((response) => {
      dispatch({ type: ADD_POST });
      
    })
    .catch((error) => {
      console.error('Error adding post:', error);
      
    });
};



// export const setSearchQuery = (query) => {
//   return {
//     type: SET_SEARCH_QUERY,
//     payload: query,
//   };
// };