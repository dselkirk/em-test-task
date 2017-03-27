import {FIELDS_LIST_ADD_ITEM, FIELDS_LIST_EDIT_ITEM, FIELDS_LIST_REMOVE_ITEM, FIELDS_LIST_TOGGLE_REQUIRED_ITEM, FIELDS_RESTORE} from '../constants/index';

export default function fields(state = {fields: []}, action) {
  switch (action.type) {

    case FIELDS_LIST_ADD_ITEM:
      return Object.assign({}, state, {
        fields: state.fields.concat(action.payload)
      });

    case FIELDS_RESTORE:
      return Object.assign({}, state, {
        fields: [].concat(action.payload.fields)
      });

    case FIELDS_LIST_TOGGLE_REQUIRED_ITEM:
      return Object.assign({}, state, {
        fields: state.fields.map(field => {
          if (field.id === action.payload) {
            return Object.assign({}, field, {
              required: !field.required
            });
          }
          return field;
        })
      });

    case FIELDS_LIST_EDIT_ITEM:
      return Object.assign({}, state, {
        fields: state.fields.map(field => {
          if (field.id === action.payload.id) {
            return Object.assign({}, field, {
              [action.payload.field]: action.payload.value
            });
          }
          return field;
        })
      });

    case FIELDS_LIST_REMOVE_ITEM:
      return Object.assign({}, state, {
        fields: state.fields.filter(field => field.id !== action.payload)
      });

    // initial state
    default:
      return state;
  }
}
