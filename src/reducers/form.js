import {FORM_DESCRIPTION_UPDATE, FORM_ERROR_ADD, FORM_RESTORE} from '../constants/index';

export default function form(state = {form: {}}, action) {
  switch (action.type) {
    case FORM_DESCRIPTION_UPDATE:
      return Object.assign({}, state, {
        form: Object.assign({}, state.form, {description: action.payload})
      });
    // initial state
    case FORM_ERROR_ADD:
      return Object.assign({}, state, {
        form: Object.assign({}, state.form, {errors: true})
      });
    case FORM_RESTORE:
      return Object.assign({}, state, {
        form: Object.assign({}, state.form, action.payload.form),
      });
    default:
      return state;
  }
}
