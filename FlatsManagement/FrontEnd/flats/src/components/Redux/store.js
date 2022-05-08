import {createStore} from 'redux';
import {combineReducers} from "redux";
import { LogReducer } from './LogIn/reducer';
import { homeReducer } from './Home/reducer';

const rootReducer=combineReducers({
    log:LogReducer,
    home:homeReducer
})


export const store=createStore(rootReducer);