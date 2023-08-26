<<<<<<< HEAD

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";


import { reducer as signReducer } from "./signup/reducer";

import thunk from "redux-thunk";


const rootReducer = combineReducers({
    
    signReducer
  });
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
=======
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as singleData } from "../Redux/Products/reducer";

const rootReducer = combineReducers({
  singleData
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> 66796c06e16bc13214d2c26f6835d24d982e388b
