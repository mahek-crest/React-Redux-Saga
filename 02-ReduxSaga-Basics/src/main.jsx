import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import catReducer from "./catState.jsx";
import catSaga from "./catSaga.js";

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware) => {
  return [...getDefaultMiddleware(), sagaMiddleware];
};

export const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware,
});

sagaMiddleware.run(catSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
