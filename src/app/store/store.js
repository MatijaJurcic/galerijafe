import { configureStore } from "@reduxjs/toolkit";
import galleriesReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import gallerySaga from "./galleries/sagas";

const sagaMiddleware = createSagaMiddleware();

export const Store = configureStore({
  reducer: galleriesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(gallerySaga);