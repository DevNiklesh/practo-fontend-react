import {LOGIN } from "../Reducers/type"


export const loginUser =(data)=>(dispatch)=>{
    try{
            dispatch({
                type: LOGIN,
                payload:{
                    userName : data.userName,
                }
            })
    }
    catch(err){
        console.log(err)
    }
}