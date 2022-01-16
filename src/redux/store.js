import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares =[logger];// if we can add middlewares in array
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;
