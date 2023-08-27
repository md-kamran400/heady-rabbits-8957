import { LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_PENDING, LOGIN_REQUEST_SUCCESS, LOGOUT } from "./actionTypes";

  
  const initialState = {
    isAuth:false,
    token:"",
    isLoading: "",
    isError: "",
    msg: "",
  };
  
  export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case LOGIN_REQUEST_PENDING:
        return { ...state, isLoading: true };
      case LOGIN_REQUEST_SUCCESS:
        return { ...state, isLoading: false,isAuth:true, msg: payload.msg,token:payload.token};
      case LOGIN_REQUEST_FAILURE:
        return { ...state, isError: true };
      case LOGOUT:
        return {...state,isAuth:false,token: "", msg: payload.msg}
      default:
        return state;
    }
  };