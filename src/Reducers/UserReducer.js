import {LOGIN,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
    LOGOUT,
    } from "./type"


export const  userLoginReducer =(state={},action)=>{
    switch(action.type){
        case LOGIN:
            return{loading:true}
        case LOGIN_SUCCESS :
            return {loading:false,userInfo:action.payload} 
        case LOGIN_FAIL:
            return {loading:false,error:action.payload}
        case LOGOUT:
            return {}     
        default:
            return state    
    }
}

