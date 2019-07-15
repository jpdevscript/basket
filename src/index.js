import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reducers from "../src/store/reducers";
import rootSaga from "./store/rootSaga";
import App from "./components/App/App.Index";
import Home from "./components/Home/Home.Index";
import "./index.scss";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/basket" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
