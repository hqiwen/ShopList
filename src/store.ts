import { combineReducers, createStore } from "redux";
import Auth from "./store/Auth/reducer";
import Comments from "./store/Comments/reducer";
import Goods from "./store/Goods/reducer";
import Orders from "./store/Orders/reducer";

const rootReducer = combineReducers({ Auth, Goods, Comments, Orders });

export default function configureStore(preloadedState?) {
                   return createStore(rootReducer, preloadedState);
               }