import { combineReducers } from "redux";
import { reducer as uiReducer } from 'redux-ui'
import fields from "./fields";
import form from "./form";

// main reducers
export const reducers = combineReducers({
  ui: uiReducer,
  fields,
  form
});

