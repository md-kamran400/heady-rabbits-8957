// reducer.js
import { DATA_REQUEST, DATA_SUCCESS, DATA_ERROR, ADD_POST, SET_SEARCH_QUERY } from './actionType';

const initialState = {
  isLoading: false,
  Alldata: [],
  isError: false,
  Totaldata: 0,
  // searchQuery: '', // Initialize the searchQuery in the state
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        Alldata: payload.post,
        Totaldata: payload.total,
      };
    }
    case DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    // case SET_SEARCH_QUERY: {
    //   return {
    //     ...state,
    //     searchQuery: payload,
    //   };
    // }
    case ADD_POST: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
