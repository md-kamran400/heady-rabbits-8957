import { applyMiddleware, combineReducers, legacy_createStore } from "redux";


import { reducer as signReducer } from "./signup/reducer";
import { reducer as singleData } from "./Products/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  singleData,
    signReducer
  });
  
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


