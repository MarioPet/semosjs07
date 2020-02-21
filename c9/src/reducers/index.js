import { combineReducers } from "redux";

import ShoppingCartReducer from "./ShoppingCartReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
    ShoppingCartReducer,
    UserReducer
});