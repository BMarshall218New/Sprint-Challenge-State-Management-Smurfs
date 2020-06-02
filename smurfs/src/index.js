import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { smurfReducer } from "./store/reducers/smurfReducer";
import thunk from "redux-thunk";

const store = createStore(smurfReducer, applyMiddleware(thunk, logger));
console.log("current state from index: ", store.getState())
ReactDOM.render(
    <Provider store={store}><App /> </Provider>, document.getElementById("root"));
