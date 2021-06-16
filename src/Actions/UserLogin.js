import {LOGIN,LOGIN_SUCCESS,LOGIN_FAIL} from "../Reducers/type"
import axios from "axios"

export const loginUser =(values)=>async (dispatch)=>{
    try{
        const {email,password} = values
       
        
        
            dispatch({
                type: LOGIN,

            })
          
            const {data} = await axios.get("http://localhost:5000/login",{params:{email,password,isDoctor:true}})
            dispatch({
                type: LOGIN_SUCCESS,
                payload:data
            })
            localStorage.setItem("userInfo",JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type : LOGIN_FAIL,
            payload:
              error.response && error.response.data.message? error.response.data.message : error.message,
        })
    }
}