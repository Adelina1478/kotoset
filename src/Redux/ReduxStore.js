
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { dialogreducer } from "./DialogReducer";
import profilereducer from "./ProfileReducer";
import userreducer from "./UserReducer";
import appreducer from "./appreducer";
import authreducer from './authReduser';

let reducers = combineReducers({
    profilePage : profilereducer,
    dialogPage: dialogreducer,
    userPage: userreducer,
    auth: authreducer,
    app:appreducer

});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
