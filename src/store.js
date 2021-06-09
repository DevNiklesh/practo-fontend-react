import {applyMiddleware,createStore,combineReducers} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"


const middleware = [thunk]
const initialState = {}
const reducers = []

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store