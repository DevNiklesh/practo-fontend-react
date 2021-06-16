import {LIST_APPOINTMENTS,
    LIST_APPOINTMENTS_SUCCESS,
    LIST_APPOINTMENTS_FAIL} from "../Reducers/type"
import axios from "axios"    

const listAppointment =(values)=>async (dispatch)=>{
try{
        const {id} = values
        dispatch({
            type: LIST_APPOINTMENTS,

        })
        var {token} = JSON.parse(localStorage.getItem('userInfo'))
        //var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YzlkZmEzNTAxMTEwMDk4MTg5MzYiLCJpYXQiOjE2MjM4MjMyMzB9.sFRam-NJeqyegTTOQPdWyl6s8xA7X7HFTAqXaUq-PX0"
        
        const config={
            
            headers:{
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token}`,
            },
        }
        const {data} = await axios.get("http://localhost:5000/listapp-doctor",{params:{id},
        headers:{
            'Content-Type': 'application/json',
            "Authorization":`Bearer ${token}`,
        },})

        dispatch({
            type:LIST_APPOINTMENTS_SUCCESS,
            payload:data
        })
     
}
catch(error){
    dispatch({
        type : LIST_APPOINTMENTS_FAIL,
        payload:
            error.response && error.response.data.message? error.response.data.message : error.message,
    })
}
}

export default listAppointment