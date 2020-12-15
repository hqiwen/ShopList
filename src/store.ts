import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  StoreEnhancer,
} from "redux";
import Auth from "./store/Auth/reducer";
import Comments from "./store/Comments/reducer";
import Goods from "./store/Goods/reducer";
import Orders from "./store/Orders/reducer";
import thunk from "redux-thunk";

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>;
};

function isReduxDevtoolsExtenstionExist(
  arg: Window | WindowWithDevTools
): arg is WindowWithDevTools {
  return "__REDUX_DEVTOOLS_EXTENSION__" in arg;
}

const rootReducer = combineReducers({ Auth, Goods, Comments, Orders });

export default function configureStore(preloadedState?) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      isReduxDevtoolsExtenstionExist(window)
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : () => {}
    )
  );
}
