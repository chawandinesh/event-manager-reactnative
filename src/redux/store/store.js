import reducer from "../reducers/eventReducers";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;
