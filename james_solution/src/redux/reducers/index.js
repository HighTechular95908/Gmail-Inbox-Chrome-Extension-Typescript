import { combineReducers } from "redux";
import layoutSettingReducer from "./layoutSettingReducer";

export default combineReducers({
    layoutSetter: layoutSettingReducer,
});