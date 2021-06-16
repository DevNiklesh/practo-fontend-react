import {CREATE_APPOINTMENTS,CREATE_APPOINTMENTS_FAIL,CREATE_APPOINTMENTS_SUCCESS} from "../Reducers/type"
import axios from "axios"

const createAppointments =(newAppdata)=>async (dispatch)=>{
    try{
        dispatch({
            type:CREATE_APPOINTMENTS,
        })
        const config={
            
            headers:{
                'Content-Type': 'application/json',
                 
            },
            body:{
                ...newAppdata
            },
        }
        const {data} = axios.post("http://localhost:5000/newapp",config)


    }
    catch(error){
        dispatch({
            type : CREATE_APPOINTMENTS_FAIL,
            payload:
                error.response && error.response.data.message? error.response.data.message : error.message,
        })
    }
    }
export default createAppointments