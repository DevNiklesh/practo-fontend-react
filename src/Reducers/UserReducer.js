import {LOGIN,
        } from "./type"


export const  userLoginReducer =(state={user:[]},action)=>{
    switch(action.type){
        case LOGIN:
            return{ user :action.payload}

        default:
            return state    
    }
}