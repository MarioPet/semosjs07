import { combineReducers } from "redux";

import MoviesReducer from "./MoviesReducer";
import TodosReducer from "./TodosReducer";

export default combineReducers({
    MoviesReducer,
    TodosReducer
});