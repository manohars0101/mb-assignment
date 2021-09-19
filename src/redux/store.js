import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { onLoadColleges } from "./sagas";


const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(onLoadColleges)

export default store
