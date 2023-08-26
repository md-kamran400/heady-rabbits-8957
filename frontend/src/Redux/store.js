
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";


import { reducer as signReducer } from "./signup/reducer";

import thunk from "redux-thunk";


const rootReducer = combineReducers({
    
    signReducer
  });
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));