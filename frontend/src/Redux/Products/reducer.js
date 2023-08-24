import { DATA_REQUEST, DATA_SUCCESS, DATA_ERROR } from "./actionType";

const initialState = {
  isLoading: false,
  Alldata: [], 
  isError: false,
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
        Alldata: payload,
      };
    }
    case DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
