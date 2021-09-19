import { combineReducers } from "redux";
import Reducer from "./reducer";

const rootReducer = combineReducers({
    app : Reducer,
})

export default rootReducer;