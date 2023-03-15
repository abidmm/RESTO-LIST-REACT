import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./REDUCERS/restaurantReducer";

// combineReducers: to easily use multiple reducers
const reducers = combineReducers({
    restaurantReducer: restaurantListReducer
    //key-name: reducer-function-name
})


const middleWare = [thunk]


const store = createStore(reducers, applyMiddleware(...middleWare))

export default store