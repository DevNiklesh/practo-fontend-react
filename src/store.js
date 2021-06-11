import {applyMiddleware,createStore,combineReducers} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {userLoginReducer} from "./Reducers/UserReducer"


const middleware = [thunk]
const initialState = {
    user : []
}
const reducers = combineReducers({
    user : userLoginReducer
})

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store