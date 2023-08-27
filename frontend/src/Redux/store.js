import { applyMiddleware, combineReducers, legacy_createStore } from "redux";


import { reducer as signReducer } from "./signup/reducer";
import { reducer as singleData } from "./Products/reducer";
import { reducer as Loginreducer } from "./Login/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  singleData,
    signReducer,
    Loginreducer
  });
  
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


