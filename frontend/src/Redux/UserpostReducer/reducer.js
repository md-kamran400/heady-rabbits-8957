// reducer.js

import { GET_USER_POST_FAIL, GET_USER_POST_REQ, GET_USER_POST_SUCCESS } from "./actionType";

const initialState = {
  isLoading: false,
  AllUserpost: [],
  isError: false,
  Totaldata: 0,
 
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_POST_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_USER_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        AllUserpost: payload
       
      };
    }
    case GET_USER_POST_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    
   
    // case ADD_POST: {
    //   return {
    //     ...state,
    //   };
    // }
    default: {
      return state;
    }
  }
};
