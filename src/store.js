import {applyMiddleware,createStore,combineReducers} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {userLoginReducer} from "./Reducers/UserReducer"
import {listAppointmetsReducer,createAppointmetsReducer} from "./Reducers/appointmentReducer"

const middleware = [thunk]

const reducers = combineReducers({
    userLogin : userLoginReducer,
    appointments:listAppointmetsReducer,
    newAppointment:createAppointmetsReducer,

})
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null

const initialState = {
    userLogin : {userInfo : userInfoFromStorage},
    appointments:[],
    newAppointment:[],
}
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store