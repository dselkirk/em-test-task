import {
  FIELDS_LIST_ADD_ITEM,
  FIELDS_LIST_EDIT_ITEM,
  FIELDS_LIST_REMOVE_ITEM,
  FIELDS_LIST_TOGGLE_REQUIRED_ITEM,
  FORM_DESCRIPTION_UPDATE,
  FORM_ERROR_ADD,
  FORM_RESTORE,
  FIELDS_RESTORE
} from '../constants/index';


export const addItem = field => ({
  type: FIELDS_LIST_ADD_ITEM,
  payload: field
});

export const removeItem = id => ({
  type: FIELDS_LIST_REMOVE_ITEM,
  payload: id
});

export const toggleRequired = id => ({
  type: FIELDS_LIST_TOGGLE_REQUIRED_ITEM,
  payload: id
});

export const editItem = (id, value, field) => ({
  type: FIELDS_LIST_EDIT_ITEM,
  payload: {id, value, field}
});

export const updateFormDescription = (value) => ({
  type: FORM_DESCRIPTION_UPDATE,
  payload: value
});

export const addError = (value) => ({
  type: FORM_ERROR_ADD,
  payload: ''
});

export const restoreForm = form => ({
  type: FORM_RESTORE,
  payload: form
});

export const restoreFields = fields => ({
  type: FIELDS_RESTORE,
  payload: fields
});
