import { createStore, applyMiddleware, compose } from "redux";
import freeze from "redux-freeze";
import { reducers } from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

// add the middlewares
let middlewares = [];

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = composeWithDevTools(applyMiddleware(...middlewares));

// create the store
const store = createStore(reducers, middleware);

// export
export { store };
