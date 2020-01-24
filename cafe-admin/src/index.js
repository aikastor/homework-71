import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import addItemReducer from "./store/reducers/addItemReducer";
import thunkMiddleware from 'redux-thunk';

import App from './App';
import './index.css';
import {Provider} from "react-redux";
import menuReducer from "./store/reducers/menuReducer";
import ordersReducer from "./store/reducers/ordersReducer";

const rootReducer = combineReducers({
  addItem:addItemReducer,
  menu: menuReducer,
  orders: ordersReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

const app =(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));


